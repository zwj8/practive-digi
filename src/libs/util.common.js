/* eslint-disable no-undef */
import ls from 'local-storage'
import { cookie } from '@/libs/util'
import { COOKIE, CURRENT_MODE } from '@/constants'
import { Message } from 'element-ui'

const common = {}

/**
 * 是否开发环境
 * @param {boolean} onlyDev 是否仅判断development环境
 */
common.isLocal = function (onlyDev = false) {
  return CURRENT_MODE === 'local'
}

/**
 * 是否开发环境
 * @param {boolean} onlyDev 是否仅判断development环境
 */
common.isDev = function (onlyDev = false) {
  return process.env.NODE_ENV === 'development'
}

/**
 * 是否测试环境
 * @param {boolean} onlyDev 是否仅判断test环境
 */
common.isTest = function (onlyDev = false) {
  return process.env.NODE_ENV === 'test'
}

/**
 * 是否生产环境
 * @param {boolean} onlyPro 是否仅判断production环境
 */
common.isPro = function (onlyPro = false) {
  return process.env.NODE_ENV === 'production'
}

/**
 * 获取当前运行版本
 */
common.getVersion = function () {
  return null
}

/**
 * @description 本地存储
 * @param {String} name cookie name
 */
common.lsSet = function (name, value) {
  return ls.set(name, value)
}

/**
 * @description 拿本地存储值
 * @param {String} name cookie name
 */
common.lsGet = function (name, defaultValue = null) {
  const value = ls.get(name)
  return value == null || value === undefined ? defaultValue : value
}

/**
 * @description 删除本地缓存
 * @param {String} name cookie name
 */
common.lsRemove = function (name) {
  return ls.remove(name)
}

/**
 * @description 本地存储
 * @param {String} name cookie name
 */
common.lsSetUser = function (uid, name, value) {
  if (!uid) {
    uid = 'ghost'
  }
  let userCache = ls.get('user')
  if (!userCache) {
    userCache = {}
  }
  if (!userCache[uid]) {
    userCache[uid] = {}
  }
  userCache[uid][name] = value

  return ls.set('user', userCache)
}

/**
 * @description 拿本地存储值
 * @param {String} name cookie name
 */
common.lsGetUser = function (uid, name, defaultValue = null) {
  if (!uid) {
    uid = 'ghost'
  }

  const userCache = common.lsGet('user', {})
  if (!userCache || !userCache[uid]) {
    return defaultValue
  }

  return userCache[uid][name] == null || userCache[uid][name] === undefined ? defaultValue : userCache[uid][name]
}

/**
 * @description 删除本地缓存
 * @param {String} name cookie name
 */
common.lsRemoveUser = function (uid, name) {
  if (!name) {
    return false
  }

  if (!uid) {
    uid = 'ghost'
  }

  const userCache = common.lsGet('user', {})
  if (!userCache || !userCache[uid]) {
    return true
  }

  delete userCache[uid][name]
  return ls.set('user', userCache)
}

/**
 * @description pop 本地存储值
 * @param {String} name cookie name
 */
common.lsPop = function (name) {
  const value = ls.get(name)
  ls.set(name, null)
  return value
}

/**
 * @description 构建 Url
 * @param {String} baseUrl
 * @param {String} params
 */
common.buildUrl = function (baseUrl, params) {
  const parmasArray = Object.keys(params).map(item => {
    return `${item}=${encodeURIComponent(params[item])}`
  })
  return `${baseUrl}?${parmasArray.join('&')}`
}

/**
 * 网络测速
 * @param {Number} times
 */
common.getNetSpeed = function (times = 3) {
  // downlink测算网速
  const connection = window.navigator.connection
  if (connection && connection.downlink) {
    let speed = connection.downlink * 1024 / 8
    let m = ' kb/s'
    if (speed > 1024) {
      speed /= 1024
      m = ' mb/s'
    }
    return speed.toFixed(2) + m
  }
  // 多次测速求平均值
  const arr = []
  for (let i = 0; i < times; i++) {
    arr.push(getSpeedWithAjax('https://s3.forcloudcdn.com/dmc/6fb948e2-3983-42c5-bb59-44b15731406d-1920x1080.jpg'))
  }
  return Promise.all(arr).then(speeds => {
    let sum = 0
    speeds.forEach(speed => {
      sum += speed
    })

    let speed = sum / times
    let m = ' kb/s'
    if (speed > 1024) {
      speed /= 1024
      m = ' mb/s'
    }
    return speed.toFixed(2) + m
  })
}

/**
 * 网络是否在线
 */
common.isOnline = function () {
  return navigator.onLine
}

/**
 * 获取对象嵌套层级的值，没有则返回默认值
 * 默认值：null
 * @param {Object} times
 * @param {String} times
 * @param {Mixed} times
 */
common.getDeepValueOrDefault = function (object, key, defValue = null) {
  if (!object || !key) {
    return defValue
  }
  let value = object
  for (const field of key.split('.')) {
    if (field && value && typeof value[field] !== 'undefined') {
      value = value[field]
    } else {
      value = defValue
      break
    }
  }
  return value
}

/**
 * 复制到粘贴板
 */
common.copyToClipboard = function (text, succCallback = null, failCallback = null) {
  // 创建'虚拟'DOM
  const fakeInput = document.createElement('input')
  document.body.appendChild(fakeInput)
  fakeInput.setAttribute('value', text)
  fakeInput.select()
  if (document.execCommand('copy')) {
    if (typeof succCallback === 'function') {
      succCallback()
    }
  } else {
    if (typeof failCallback === 'function') {
      failCallback()
    }
  }

  // 删除'虚拟'DOM
  document.body.removeChild(fakeInput)
}

/**
 * @description:               加载指定目录下所有模块
 * @param {Array}   moudles    require.context 返回的路径和文件名组成的数组
 * @return {Object}            返回一个模块对象
 */
common.importAll = moudles => {
  const _modules = {}
  moudles.keys().forEach(key => {
    const module = moudles(key).default
    const name = module.name
    _modules[name] = module
  })

  return _modules
}

/**
 * @description: 对支持多项搜索的输入文本进行分割，返回数组
 * @param {*} text 搜索文本
 * @return {*}
 */
common.searchTextFormat = text => {
  // 对中英文的逗号和分号进行数组分割
  let arr = text.split(/,|;|，|；/)
  // 去除数组每项左右空格
  arr = arr.map(v => (v.trim()))
  // 去除数组重复项
  arr = [...new Set(arr)]
  // 去除无效项
  arr = arr.filter(v => (v !== null && v !== '' && typeof v !== 'undefined'))
  return arr
}
/**
 * @description: 对多项需要分割的搜索项进行处理，并返回可用于接口传参的对象
 * @param {*} kwObj keywordObject 搜索关键字对象
 * @param {*} params 用于接口传参的对象
 * @param {*} append 追加在kwobj中 key后面的字段，这个需要在一开始就根据接口参数设定，比如接口参数 uidList，那么kwobj中的搜索关键字就写为 uid，append 就为 List
 * @return {*}
 */
common.searchFormat = (kwObj, params, append = 'List') => {
  Object.keys(kwObj).forEach(key => {
    if (kwObj[key] && typeof kwObj[key] === 'string') {
      params[`${key}${append}`] = common.searchTextFormat(kwObj[key])
    }
  })
  return params
}
/**
 * @description: 判断是否本地开发环境
 */
common.envLocal = () => {
  return process.env.VUE_APP_DG_ENV === 'local'
}

/**
 * @description: 首字母大写
 * @param {*} str 要处理的字符串
 * @return {*} 返回处理后的字符串
 */
common.firstLetterUppercase = str => {
  const strList = [...str]
  strList[0] = strList[0].toUpperCase()
  return strList.join('')
}

// 判断用户地区，询问用户是否需要切换到对应地区
common.checkLocate = () => {
  // 用户当前语言
}

export default common
