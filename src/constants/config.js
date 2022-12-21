/* 星期 */
export const WEEK = {
  MONDAY: {
    value: 'MONDAY',
    label: 'MONDAY',
    labelSimple: 'MONDAY',
    code: 1
  },
  TUESDAY: {
    value: 'TUESDAY',
    label: 'TUESDAY',
    labelSimple: 'TUESDAY',
    code: 2
  },
  WEDNESDAY: {
    value: 'WEDNESDAY',
    label: 'WEDNESDAY',
    labelSimple: 'WEDNESDAY',
    code: 3
  },
  THURSDAY: {
    value: 'THURSDAY',
    label: 'THURSDAY',
    labelSimple: 'THURSDAY',
    code: 4
  },
  FRIDAY: {
    value: 'FRIDAY',
    label: 'FRIDAY',
    labelSimple: 'FRIDAY',
    code: 5
  },
  SATURDAY: {
    value: 'SATURDAY',
    label: 'SATURDAY',
    labelSimple: 'SATURDAY',
    code: 6
  },
  SUNDAY: {
    value: 'SUNDAY',
    label: 'SUNDAY',
    labelSimple: 'SUNDAY',
    code: 7
  }
}

// 本地环境地址
export const LOCAL_URL = [
  { code: 'DIGIADS-WEB', callback: 'http://www.local.superdigiads.com:8081/callback' },
  { code: 'DIGIADS-ADMIN', callback: 'http://admin.local.superdigiads.com:8082/callback' },
  { code: 'ADSEASY-WEB', callback: 'http://www.local.adseasy.cn:8083/callback' }
]

// 语言
export const LANG = [
  { code: 'zh', upperCode: 'ZH', name: '中文', zhName: '中文' },
  { code: 'en', upperCode: 'EN', name: 'English', zhName: '英语' },
  { code: 'ar', upperCode: 'AR', name: 'العربي', zhName: '阿语' },
  { code: 'fr', upperCode: 'FR', name: 'Le français', zhName: '法语' },
  { code: 'pl', upperCode: 'PL', name: 'Polski', zhName: '波兰语' },
  { code: 'de', upperCode: 'DE', name: 'Deutsch', zhName: '德语' },
  { code: 'es', upperCode: 'ES', name: 'Español', zhName: '西班牙语' },
  { code: 'it', upperCode: 'IT', name: 'Italiano', zhName: '意大利语' },
  { code: 'nl', upperCode: 'NL', name: 'Nederlands', zhName: '荷兰语' },
  { code: 'el', upperCode: 'EL', name: 'Ελληνικά', zhName: '希腊语' },
  { code: 'cs', upperCode: 'CS', name: 'Čeština', zhName: '捷克语' },
  { code: 'sv', upperCode: 'SV', name: 'Svenska', zhName: '瑞典语' },
  { code: 'pt', upperCode: 'PT', name: 'Português', zhName: '葡萄牙语' },
  { code: 'hu', upperCode: 'HU', name: 'Magyar', zhName: '匈牙利语' },
  { code: 'da', upperCode: 'DA', name: 'Dansk', zhName: '丹麦语' },
  { code: 'fi', upperCode: 'FI', name: 'Suomi', zhName: '芬兰语' },
  { code: 'no', upperCode: 'NO', name: 'Norsk', zhName: '挪威语' },
  { code: 'sk', upperCode: 'SK', name: 'Slovenský', zhName: '斯洛伐克语' },
  { code: 'hr', upperCode: 'HR', name: 'Hrvatski', zhName: '克罗地亚语' },
  { code: 'sl', upperCode: 'SL', name: 'Slovenščina', zhName: '斯洛文尼亚语' },
  { code: 'he', upperCode: 'HE', name: 'עִבְרִית', zhName: '希伯来语' },
  { code: 'ru', upperCode: 'RU', name: 'Русский', zhName: '俄语' }
]

// 手机验证规则
export const mobileRegExp = [
  { code: 'CN', reg: /^1[3|4|5|7|8][0-9]\d{8}$/ }
]

// 行业
export const INDUSTRY = [
  { label: 'Agency', value: 'Agency' },
  { label: 'CPG', value: 'CPG' },
  { label: 'Financial Services', value: 'Financial Services' },
  { label: 'Media & Entertainment', value: 'Media & Entertainment' },
  { label: 'Pharmaceuticals & Healthcare', value: 'Pharmaceuticals & Healthcare' },
  { label: 'Retail', value: 'Retail' },
  { label: 'Technology', value: 'Technology' },
  { label: 'Other', value: 'Other' },
]

// Which best matches what you're looking for?
export const BEST_MATCHES = [
  {
    label: 'Social Listening / Consumer Intelligence',
    value: 'Social Listening / Consumer Intelligence'
  },
  {
    label: 'Social Media Management',
    value: 'Social Media Management'
  }
]
