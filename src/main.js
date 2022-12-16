import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { OSS_PREFIX } from './constants'
// 多语言模块
import i18n from './i18n'
// 自定义公共组件
import CommonComponents from '@/components/common'

// 全局图片前缀
Vue.prototype.OSS_PREFIX = OSS_PREFIX
// import '@/mock'

Vue.use(ElementUI)

// 加载自定义公共组件
Vue.use(CommonComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
