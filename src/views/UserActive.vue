<template>
  <div class="all">
    <div class="banner">
      <div class="title">
        <h1>The account is being activated, please wait...</h1>
        <p style="color:#AEAEB4 ;"> {{ tips }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store'
import AUTH from '@/api/auth'
export default {
  name: 'UserActive',
  mixins: [],
  components: {},
  filters: {},
  props: {},
  data() {
    return {
      params: null,
      tips: 'If the activation fails, refresh it again!'
    }
  },
  computed: {},
  watch: {},
  created() {
    store.dispatch('global/locate/setLocate', 'US')
    this.getUrlParams()
  },
  mounted() { },
  methods: {
    /**
     * @description: 获取 URL 参数
     * @return {*}
     */
    getUrlParams() {
      this.params = this.$route.params
      console.log(this.params)
      this.userActive()
    },
    /**
     * @description: 用户激活
     * @return {*}
     */
    userActive() {
      AUTH.UserActivate(this.params).then(res => {
        console.log(res)
        if (res.value.token) {
          this.$router.push({ name: 'usLogin' })
        } else {
          this.tips = res.warmMsg || res.value.errorTips || 'If the activation fails, refresh it again!'
        }
      }).catch(e => { console.log(e) })
    }
  }
}
</script>
<style lang="less" scoped>
.all {
  background-image: url('@{oss_prefix}/default/us_bg_adorn.png');
  background-repeat: no-repeat;
  background-position: left 0px bottom 200px;
  height: 100%;
}

.banner {
  width: 800px;
  margin: 80px auto;

}
</style>
