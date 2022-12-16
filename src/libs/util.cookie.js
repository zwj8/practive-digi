/* eslint-disable no-undef */
import Cookie from 'js-cookie'
import { COOKIE_PREFIX } from '@/constants'

const cookie = {}

/**
 * @description: 获取Cookie, 如果不传值，则获取全部Cookie
 * @param {String} key
 * @return {*}
 */
cookie.get = key => {
  if (key) return Cookie.get(`${COOKIE_PREFIX}${key}`)
  else return Cookie.get()
}

/**
 * @description: 设置Cookie
 * @param {*} key
 * @param {*} value
 * @return {*}
 */
cookie.set = (key, value, cookieSetting = null) => {
  return Cookie.set(`${COOKIE_PREFIX}${key}`, value, cookieSetting)
}

/**
 * @description: 删除Cookie
 * @param {*} key
 * @return {*}
 */
cookie.remove = key => {
  return Cookie.remove(`${COOKIE_PREFIX}${key}`)
}

export default cookie
