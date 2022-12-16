import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './config/zh'
import en from './config/en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  // 默认语言
  locale: 'zh',
  messages: {
    zh,
    en
  }
})

export default i18n
