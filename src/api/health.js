import axios from '@/api/axios'

const HEALTH = {}

// token 有效性检查
HEALTH.tokenCheck = params => { return axios.get('/auth/authorize', params) }
// HEALTH.tokenCheck = () => { return axios.get('/token-check') } // 旧版

export default HEALTH
