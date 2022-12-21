import applyAdAccount from './zh/apply.account'
import common from './common/common.zh'
const zh = {
  // 广告开户
  apply_ad_account: {
    ...applyAdAccount
  }
}

// 登录、注册页、忘记密码、修改密码
zh.auth = {
  email: common.info.email,
  secret: common.secret,
  placeholder_email: common.placeholder.email,
  placeholder_secret: common.placeholder.secret,
  comfirm_secret: '确认密码',
  new_secret: '输入新密码',
  placeholder_new_secret: '请输入新密码',
  placeholder_comfirm_secret: '请再次输入密码',
  login: {
    title: '登陆',
    desc: '欢迎来到 Digi Ads！',
    forgot_passwd: common.forgot_passwd,
    btn_login: '登陆账号',
    signUp: '注册账号',
    not_registered: '还没有注册账号？',
    success: '注册成功。'
  },
  signUp: {
    title: '注册',
    title_active: '分销商激活',
    desc: '快速注册，体验 TikTok 广告选品，抓住跨境短视频红利',
    btn_create: '创建账户',
    contact: '联系方式',
    placeholder_contact: common.placeholder.phone,
    send_captcha: '发送验证码',
    placeholder_captcha: common.placeholder.captcha,
    msg_captcha: '验证码已发送，请注意查收。',
    agree_tips: '通过注册代表您已阅读和同意 Digi Ads 的',
    msg_agree: common.message.need_agreement,
    service_agreement: common.service_agreement,
    privacy_clause: common.privacy_clause,
    and: '和',
    has_account: '已经有账号了？',
    to_login: '直接登陆',
    customer_serivce: common.customer_serivce
  },
  forgot: {
    title: '密码重置',
    desc: '输入您的 Email 地址，我们会给您发送一封邮件，其中包含一个验证码用于重置您的账号密码',
    btn_next: '下一步',
    msg_send: '邮件已发送，请注意查收。',
    reseted_title: '重置密码完成！',
    success: '已设置完成，请返回登陆页面重新登陆。',
    email_captcha: '邮箱验证码',
    placeholder_email_tips: '验证码已发送至邮箱：{email}',
    placeholder_email_captcha: '请输入 6 位数字验证码',
    btn_comfirm: '确认修改',
    msg_invalid_operation: common.message.invalid_operation
  }
}

// 表单验证
zh.valid = {
  email_required: '请输入邮箱',
  email_type_error: '邮箱格式错误',
  secret_required: '请输入密码',
  confirm_secret_required: '请再次输入密码',
  confirm_secret_error: '两次输入密码不一致',
  agreement_required: '请先同意条款',
  phone_required: '请输入手机号',
  email_phone_required: '请输入手机号 / 邮箱',
  captcha_required: '请输入验证码',
  phone_error: '请输入正确的手机号',
  phone_null: '手机号不能为空',
  email_captcha_required: '请输入邮箱验证码',
  email_or_phone: '请输入邮箱或手机号'
}

zh.n_auth = {
  title: '东坤 ID',
  desc: '欢迎来到 [PLACEHOLDER]',
  type_phone: '验证码登录',
  type_pw: '密码登录',
  form: {
    contact: '手机号',
    act: '账号',
    pw: '密码',
    captcha: '验证码'
  },
  placeholder: {
    act: '手机号 / 邮箱',
    pw: common.prefix.input + '密码',
    contact: common.prefix.input + '手机号',
    captcha: common.prefix.input + '验证码'
  },
  btn: {
    captcha: '发送验证码',
    login: '登录/注册',
    f_pw: '忘记密码？',
    completed_sgin: '完成注册'
  },
  text: {
    agree_tips: '通过注册代表您已阅读并同意',
    and: '和',
    service: '服务协议',
    privacy: '隐私条款',
    qr_code: '客服二维码'
  },
  msg: {
    captcha_wait: ' 秒后可重发',
    login_success: '登录成功',
    sign_error: '注册失败，请稍后重试',
    send_captcha: '验证码已发送，请注意查收。',
    logouting: '正在退出登录...',
    logout_faild: '退出登录失败，请刷新页面重试！'
  }
}

// 邀请入驻
zh.invite = {
  title: '邀请入驻',
  desc: '快速登录/注册，开启使用'
}

export default zh
