import util from '@/libs/util'
import { TIME } from '@/constants'
import CONFIG from '@/api/config'
export default {
  namespaced: true,
  state: {
    areaCode: null
  },
  getters: {
    // 获取手机区号
    areaCodeOptions (state) {
      return state.areaCode
    }
  },
  mutations: {
    /**
     * @description: 设置配置项
     * @param {*} state
     * @param {*} options 配置项
     * @param {*} key 要设置的配置名
     * @return {*}
     */
    set (state, { options, key }) {
      state[key] = options
    }
  },
  actions: {
    /**
     * @description: 检查某项配置是否有值
     * @param {*} dispatch
     * @param {*} key 要检查的配置的key
     * @return {*}
     */
    async check ({ state, dispatch }, key) {
      if (state[key]) return
      await dispatch('load', key)
    },
    /**
     * @description: 加载
     * @param {*} commit
     * @param {*} dispatch
     * @param {*} key 要加载的键名
     * @return {*}
     */
    async load ({ commit, dispatch }, key) {
      // 当前时间戳
      const currentTimestamp = new Date().getTime()
      // 获取本地缓存
      const localOptions = await util.lsGet(key)
      // 本地缓存是否存在和是否过期
      if (localOptions?.expire < currentTimestamp) commit('set', { key: key, options: localOptions.data })
      // 本地缓存过期或者不存在, 获取远端数据
      else dispatch('loadRemote', key)
    },
    /**
     * @description: 获取远程数据
     * @param {*} commit
     * @param {*} key
     * @return {*}
     */
    async loadRemote ({ commit }, key) {
      // 过期限制
      const { STORE: { CONFIG_DEFAULT_EXPIRE } } = TIME
      // 获取ApiName
      const keyToUpper = util.firstLetterUppercase(key)
      const ApiName = 'get' + keyToUpper
      const result = await CONFIG[ApiName]()
      // 没有结果，直接返回
      if (!result?.length) return
      // 设置options
      commit('set', { key: key, options: result })
      // 设置过期时间，并保存到本地缓存
      const value = {
        expire: new Date().getTime() + CONFIG_DEFAULT_EXPIRE,
        data: result
      }
      util.lsSet(key, value)
    }
  }
}
