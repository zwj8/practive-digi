import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import routes from './routes'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // 当管理后台是用子路由的形式展现时，需要更改 base
  // base: '/admin/',
  routes
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 进度条-开始
  NProgress.start()

  if (to.name === 'page404') {
    NProgress.done()
    next()
    return
  }

  if (to.redirect) {
    NProgress.done()
    next(to.redirect.path)
  } else {
    NProgress.done()
    next()
  }
})

export default router
