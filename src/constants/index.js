export const COOKIE_PREFIX = process.env.VUE_APP_COOKIE_PREFIX
export const COOKIE_DOMAIN = process.env.VUE_APP_SET_COOKIE_ROOT
export const OFFICIAL_WEBSITE = process.env.VUE_APP_OFFICIAL_WEBSITE
export const MOBILE_WEBSITE = process.env.VUE_APP_MOBILE_WEBSITE
export const API_GATEWAY = process.env.VUE_APP_API_GATEWAY
export const ROUTER_BASE = process.env.VUE_APP_ROUTER_BASE
export const PERMISSION_GROUP = '/front'

// OSS图片前缀
export const OSS_PREFIX = 'https://dk-front.oss-accelerate.aliyuncs.com'

// i18n 占位符 正则匹配
export const I18N_PLACEHOLDER = /\[PLACEHOLDER\]/g

export const COOKIE = {
  TOKEN: 'token',
  UID: 'uid',
  AID: 'aid',
  LANG: 'lang',
  SIDEBAR_COLLAPSE: 'sidebar_collapse',
  NAVBAR_LOCK: 'navbar_lock'
}

export const LS = {
  PREV_PAGE: 'prev_page',
  USER_INFO: 'info'
}

export const TIME = {
  STORE: {
    // config 默认缓存过期时间(ms) - 12h
    CONFIG_DEFAULT_EXPIRE: 43200000,
    // 权限默认缓存过期时间(ms) - 10min
    PERMISSION_DEFAULT_EXPIRE: 600000,
    // 权限刷新频率限制(ms) - 30s
    PERMISSION_REFRESH_LIMIT: 30000
  }
}
