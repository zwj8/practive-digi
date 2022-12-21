import axios from '@/api/axios'

const AUTH = {}

// 登陆
AUTH.Login = parmas => { return axios.post('/auth/signIn', parmas) }

// 注册
AUTH.SignUp = parmas => { return axios.post('/auth/signUp', parmas) }

// 退出登陆
AUTH.Logout = parmas => { return axios.get('/auth/logout') }

// 发送手机验证码
AUTH.SendCaptcha = parmas => { return axios.post('/auth/captcha/send', parmas) }

// 发送重置密码邮件
AUTH.SendEmail = parmas => { return axios.post('/auth/passwd/reset/send', parmas) }

// 密码重置
AUTH.ResetSecret = parmas => { return axios.post('/auth/passwd/reset', parmas) }

// 第三方登录
AUTH.ThirdLogin = parmas => { return axios.post('/auth/third/signIn', parmas) }

// 第三方账号绑定
AUTH.ThirdAccountBinding = parmas => { return axios.post('/auth/third/binding', parmas) }

// token 有效性检查
AUTH.tokenCheck = params => { return axios.get('/auth/authorize', { params: params }) }

// 用户登录/注册
AUTH.LoginAndSign = params => { return axios.post('/auth/v2/sign', params) }

// 用户地区定位
AUTH.Locate = () => { return axios.post('/auth/locate') }

//  北美用户注册
AUTH.NorthSign = params => { return axios.post('/auth/us/signUp', params) }

//  北美用户发送激活邮件
AUTH.ActiveEmail = params => { return axios.post('/auth/active-email/send', params) }

//  北美用户激活接口
AUTH.UserActivate = ({ appKey, locate, language, email, code }) => { return axios.get(`/auth/user-active/${appKey}/${locate}/${language}/${email}/${code}`) }


export default AUTH
