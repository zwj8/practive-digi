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
  },
  // 北美认证登录
  {
    path: '/us',
    name: 'us',
    component: routerView,
    redirect: { name: 'usLogin' },
    children: [
      // 登录页
      {
        path: 'login',
        name: 'usLogin',
        component: () => import('@/views/us/Login.vue')
      },
      // 注册详情页
      {
        path: 'register',
        name: 'usRegister',
        component: () => import('@/views/us/passwd/RegisterDetail.vue')
      },
      // 忘记密码
      {
        path: 'password',
        name: 'usPassword',
        component: () => import('@/views/us/passwd/ForgotPasswd.vue')
      },
      // 重置密码
      {
        path: 'reset',
        name: 'usReset',
        component: () => import('@/views/us/passwd/ResetSecret.vue')
      },
      // 等待激活
      {
        path: 'wait-active',
        name: 'usWaitActive',
        component: () => import('@/views/us/WaitActivation.vue')
      },
    ]
  },
  // /:appKey/:locate/:language/:email/:code
  // 用户激活
  {
    path: '/user-active/:appKey/:locate/:language/:email/:code',
    name: 'userActive',
    component: () => import('@/views/UserActive')
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
