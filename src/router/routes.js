import routerView from '@/views/RouterView'
// import auth from '@/libs/auth'
// import AUTH_API from '@/api/auth'
// import { OFFICIAL_WEBSITE } from '@/constants'

const frameIn = []

const frameOut = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
    // beforeEnter: (to, from, next) => {
    //   AUTH_API.tokenCheck({ appKey: to.query.appKey }).then(res => {
    //     if (res === 'success') {
    //       window.location.href = res.callback || OFFICIAL_WEBSITE
    //     } else {
    //       next()
    //     }
    //   }).catch(e => {
    //     next()
    //   })
    // }
  },
  // 北美版登录路由
  {
    path: '/northlogin',
    name: 'northlogin',
    component: () => import('@/views/north/login.vue')
  },
  //北美版修改密码
  {
    path: '/password',
    name: 'password',
    component: () => import('@/views/north/passwd/ForgotPasswd.vue')
  },
    //北美版注册详情页
    {
      path: '/detailpage',
      name: 'detailpage',
      component: () => import('@/views/north/passwd/detailpage.vue')
    },






  {
    path: '/signup',
    name: 'signUp',
    component: () => import('@/views/SignUp')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/Logout')
  },
  {
    path: '/third-login',
    name: 'thirdLogin',
    component: () => import('@/views/ThirdLogin')
  },
  {
    path: '/passwd',
    name: 'passwd',
    component: routerView,
    children: [
      // 忘记密码
      {
        path: 'forget',
        name: 'passwdForget',
        component: () => import('@/views/passwd/ForgetView')
      },
      // 更改密码
      {
        path: 'reset',
        name: 'passwdReset',
        component: () => import('@/views/passwd/ResetView')
      }
    ]
  },
  // 分销商激活注册
  {
    path: '/distr',
    name: 'distr',
    component: routerView,
    redirect: { name: 'distrActive' },
    children: [
      {
        path: 'active',
        name: 'distrActive',
        component: () => import('@/views/SignUp')
      }
    ]
  },
  // adseasy 入驻注册
  {
    path: '/adseasy',
    name: 'adseasy',
    component: routerView,
    redirect: { name: 'adseasyInvite' },
    children: [
      {
        path: 'invite',
        name: 'adseasyInvite',
        component: () => import('@/views/adseasy/PersonInvite')
      }
    ]
  },
  // 移动端登录
  {
    path: '/mobile',
    name: 'mobile',
    component: routerView,
    redirect: { name: 'mobileLogin' },
    children: [
      // 登录页
      {
        path: 'login',
        name: 'mobileLogin',
        component: () => import('@/views/mobile/MobileLogin')
      },
      // 隐私
      {
        path: 'policy',
        name: 'policy',
        component: () => import('@/views/mobile/Policy')
      }
    ]
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: 'page404',
    component: () => import('@/views/system/error/NotFound')
  },
  {
    path: '/403',
    name: 'page403',
    component: () => import('@/views/system/error/Forbidden')
  }
]

export default [...frameIn, ...frameOut, ...errorPage]
