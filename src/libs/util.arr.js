/* eslint-disable no-undef */
const arr = {}

/**
 * @description 根据 keys 集合获取一个新 dict
 * @param {Object} dict
 * @param {Array} keys
 */
arr.getByKeys = function (dict, keys) {
  const newDict = {}
  const objKeys = Object.keys(dict)

  if (!dict || objKeys.length <= 0) {
    return newDict
  }

  if (keys instanceof Array && keys.length) {
    for (const key of keys) {
      if (objKeys.includes(key)) {
        newDict[key] = dict[key]
      }
    }
  }
  return newDict
}

export default arr
