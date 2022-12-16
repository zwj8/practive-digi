import common from '@/i18n/config/common/common.zh'
const act = {
  text_add_wechat: '添加开户小助手',
  nav_tiktok: 'TikTok账户（电商）申请表',
  nav_facebook: 'Facebook广告账户申请表',
  btn_submit: common.btn.submit,
  valid: {},
  message: {}
}

// 表单验证
const valid = {}
act.valid = { ...valid }

// 提示消息
const msg = {
  submit_success: '工单提交完成。',
  need_agreement: common.message.need_agreement
}
act.message = { ...msg }

export default act
