import cookie from '@/libs/util.cookie'
import stote from '@/store'
import { COOKIE, COOKIE_DOMAIN } from '@/constants'
import store from '@/store'

const auth = {}

/**
 * 设置当前登录用户 token
 */
auth.setToken = function (token) {
  const tokenJson = auth.parseToken(token)
  cookie.set(COOKIE.UID, tokenJson.uid)
  return cookie.set(COOKIE.TOKEN, token, { domain: COOKIE_DOMAIN })
}

/**
 * 获取当前登录用户 token
 */
auth.getToken = function () {
  return cookie.get(COOKIE.TOKEN)
}

/**
 * 移除当前登录用户 token
 */
auth.removeToken = function () {
  cookie.remove(COOKIE.UID)
  return cookie.remove(COOKIE.TOKEN, { domain: COOKIE_DOMAIN })
}

/**
 * 获取登录用户 UID
 */
auth.getUid = function () {
  return cookie.get(COOKIE.UID)
}

/**
 * 当前是否有效 token
 */
auth.hasToken = function () {
  const token = auth.getToken()
  if (token && token !== 'undefined') {
    const tokenJson = auth.parseToken(token)
    const now = Date.parse(new Date()) / 1000
    if (tokenJson?.exp > now - 300) {
      return true
    }
  }

  return false
}

/**
 * @description: 解析Token，获取Token存储的属性
 * @param {*} token
 * @return {*}
 */
auth.parseToken = token => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const tokenJson = JSON.parse(window.atob(base64))
  return tokenJson
}

/**
 * 设置当前登录用户 aid
 */
auth.setAid = function (aid) {
  return cookie.set(COOKIE.AID, aid, { domain: COOKIE_DOMAIN, expires: -1 })
}

/**
 * 获取当前登录用户 aid
 */
auth.getAid = function () {
  return cookie.get(COOKIE.AID)
}

// 获取用户当前定位
auth.getLocate = function () {
  store.dispatch('global/config/checkLocate')
}

// 设置用户地区
auth.setLocate = function (locate) {
  cookie.set(COOKIE.LOCATE, locate, { domain: COOKIE_DOMAIN, expires: 7 })
}

// 获取用户地区
// auth.getLocate = function () {
//   return cookie.get(COOKIE.LOCATE)
// }

export default {
  ...auth
}
