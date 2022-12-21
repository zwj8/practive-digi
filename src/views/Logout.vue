<template>
  <div style="background: #f0f2f5; margin-top: -20px; height: 100%">
    <div class="page-center">
      <h3><i class="el-icon-loading"></i>&nbsp;{{ tips }}</h3>
    </div>
  </div>
</template>

<script>
import AUTH_API from '@/api/auth'
import store from '@/store'
export default {
  data () {
    return {
      tips: null,
      locate: null
    }
  },
  created () {
    // 根据用户定位判断展示语言
    this.setLanguage()
  },
  methods: {
    /**
     * @description: 根据用户定位，判断展示语言
     * @return {*}
     */
    setLanguage () {
      this.locate = this.$route.query?.locate
      let _lang = ''
      switch (this.locate) {
        case 'CN':
          _lang = 'zh'
          break
        case 'US':
          _lang = 'en'
          break
      }
      store.commit('global/i18n/setLanguage', _lang)
      this.tips = this.$t('n_auth.msg.logouting')
    },
    logout () {
      AUTH_API.Logout().then(res => {
        if (res?.success === true) {
          if (this.$route.query?.callback) {
            window.location.href = this.$route.query?.callback
          } else {
            const appKey = this.$route.query?.appKey
            // 根据用户定位，判断退出到哪个登录页面
            let routerName = this.locate === 'CN'
              ? 'login'
              : 'usLogin'
            this.$router.push({
              name: routerName,
              query: {
                appKey: appKey
              }
            })
          }
        } else {
          this.tips = this.$t('n_auth.msg.logout_faild')
        }
      }).catch(e => {
        console.log(e)
        this.tips = this.$t('n_auth.msg.logout_faild')
      })
    }
  },
  mounted () {
    this.logout()
  }
}
</script>

<style lang="less" scoped>
.page-center {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px auto 60px;
  top: 25%;
  padding: 0 100px;
  overflow: hidden;
}
</style>
