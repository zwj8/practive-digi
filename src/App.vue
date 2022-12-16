<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

export default {
  methods: {
    initdayjs () {
      dayjs.extend(duration)
      dayjs.extend(isSameOrAfter)
      dayjs.extend(isSameOrBefore)
    }
  },
  created () {
    this.initdayjs()
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  #app {
    // 当设置该属性时，会因为出现侧边滚动条导致宽度溢出，继而出现底部滚动条;直接让宽度自适应即可。
    // width: 100vw;
    height: 100vh;
  }
}
</style>
