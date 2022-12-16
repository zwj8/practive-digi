import Mock from 'mockjs'
// import Login from '@/mock/data/login'
import RouterList from '@/mock/data/router-full'
import VerifyList from '@/mock/data/verify'

const BaseURL = 'mock/'
Mock.setup({
  timeout: '1000-3000'
})

// 登录
Mock.mock(`${BaseURL}api/login`, 'post', options => {
  // const user = JSON.parse(options.body)
  // const userInfo = Login.filter(u => (u.userName === user.userName && u.password === user.password))
  const token = Mock.mock({ token: /[a-zA-Z0-9]{10}\.[a-zA-Z0-9]{30}\.[a-zA-Z0-9]{9}/ })
  const status = true
  // const status = userInfo.length > 0
  return {
    Ack: status,
    Message: status ? '登录成功。' : '登录失败，请检查账号密码。',
    token: status ? token.token : '',
    userInfo: status && (() => {
      const { password, ...info } = {}
      // const { password, ...info } = userInfo[0]
      return info
    })()
  }
})

// 返回全部路由
Mock.mock(`${BaseURL}api/getRouter`, 'get', options => {
  return RouterList
})

// 获取分销商申请列表数据
Mock.mock(`${BaseURL}api/admin/distr/query/apply/list`, 'get', VerifyList)

export default Mock
