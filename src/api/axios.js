import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_GATEWAY,
  timeout: 60000
})

service.defaults.withCredentials = true

// 请求拦截
service.interceptors.request.use(
  config => {
    config.headers['x-dk-lang'] = store.getters['global/i18n/language']
    config.headers['x-dk-region'] = store.getters['global/locate/userLocate'] || 'CN'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      const resData = response.data
      if (resData.success === false) {
        return Promise.reject(resData)
      }
    }

    return response.data
  },
  error => {
    // 先判断是否是因为权限问题导致接口请求失败
    if (error.response?.data?.success === false) {
      // 根据状态码不同执行不同操作
      const resData = error.response.data
      Message({
        type: 'error',
        message: resData.warmMsg || resData.errorMsg || 'Request failed, try again',
        showClose: true,
        duration: 1500
      })
    }

    return Promise.reject(error)
  }
)

export default service
