import axios from '@/api/axios'
const OSS_AREA_CODE = 'https://digiads-fron-config.oss-cn-guangzhou.aliyuncs.com/area-code-config.json'

/**
 * @description: 获取手机区号配置
 * @return {*}
 */
const _getAreaCode = async () => {
  const timestamp = new Date().getTime()
  const currentUrl = `${OSS_AREA_CODE}?_t=${timestamp}`
  try {
    const response = await fetch(currentUrl, { method: 'GET' })
    const result = await response.json()
    if (result?.data?.length) return result.data
    else return null
  } catch (e) {
    console.log(e)
    return null
  }
}

// 获取国家
const _getRegion = () => { return axios.get('/config/options/region') }

export default {
  getAreaCode: _getAreaCode,
  getRegion: _getRegion
}
