import { I18N_PLACEHOLDER } from '@/constants'
/**
 * @description: 递归函数
 * @param {Object} obj     递归对象
 * @param {Object} pherObj 递归对象
 * @param {String} prefix  要添加的前缀
 * @return {*}
 */
export const recursion = (obj, pherObj, prefix) => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') {
      pherObj[key] = prefix + obj[key]
    } else {
      pherObj[key] = {}
      recursion(obj[key], pherObj[key], prefix)
    }
  })
}

/**
 * @description: 处理 i18n 中带有占位符 [PLACEHOLDER] 的文本，并替换占位符内容
 * @param {*} i18nText     i18n文本
 * @param {*} replaceArray 要替换的内容的数组
 * @return {*}
 */
export const replacePLH = (i18nText, replaceArray = []) => {
  if (!i18nText) return null
  const reArr = [...replaceArray]
  return i18nText.replace(I18N_PLACEHOLDER, () => {
    return reArr.shift()
  })
}
