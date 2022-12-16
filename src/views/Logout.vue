<template>
  <div style="background: #f0f2f5; margin-top: -20px; height: 100%">
    <div class="page-center">
      <h3><i class="el-icon-loading"></i>&nbsp;{{ tips }}</h3>
    </div>
  </div>
</template>

<script>
import AUTH_API from '@/api/auth'

export default {
  data () {
    return {
      tips: '正在退出登录...'
    }
  },
  methods: {
    logout () {
      AUTH_API.Logout().then(res => {
        if (res?.success === true) {
          if (this.$route.query?.callback) {
            window.location.href = this.$route.query?.callback
          } else {
            const appKey = this.$route.query?.appKey
            this.$router.push({
              name: 'login',
              query: {
                appKey: appKey
              }
            })
          }
        } else {
          this.tips = '退出登录失败，请刷新页面重试！'
        }
      }).catch(e => {
        console.log(e)
        this.tips = '退出登录失败，请刷新页面重试！'
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
