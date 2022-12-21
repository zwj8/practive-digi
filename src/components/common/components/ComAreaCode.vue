<template>
  <div class="form-areacode btn-areacode" @click="handleAreaCode" :class="{'disabled':disabeld}">
    <span class="form-areacode__checked btn-areacode" @click="handleAreaCode">
      {{ checkedAreaCodeLabel }}
      <i class="el-icon-arrow-down btn-areacode"></i>
    </span>
    <div v-show="areaCodeVisible" ref="areaCode" class="form-areacode__options">
      <div class="options-wrapper">
        <span class="options-item" v-for="item in areaCodeOptions" :key="item.addr" @click.stop="handleChecked(item)">
          {{ lang == 'zh' ? `${item.name} ${item.code}` : `${item.abbr} ${item.code}` }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ComAreaCode',
  components: {},
  filters: {},
  props: {
    //父传子的对应的国家和区号
    countryCode: {
      type: Array,
      required: false
    },
    // 语言
    lang: { type: String, default: 'zh' },
    // 是否可操作
    disabeld: { type: Boolean, default: false }
  },
  data() {
    return {
      checkedAreaCodeLabel: '',
      areaCodeVisible: false
    }
  },
  computed: {
    //国家区号数据
    ...mapGetters('global/config', ['areaCodeOptions'])
  },
  watch: {
    //对国家区号数据的监听
    areaCodeOptions: {
      immediate: true,
      handler(value) {
        if (value?.length) {
          this.handleChecked(value[0])
        }
      }
    },
    //对应默认监听的国家和区号
    countryCode: {
      immediate: true,
      handler(value) {
        if (value?.length) {
          // console.log(value);
          this.handleChecked(value[0])
        }
      }
    },

  },
  created() {
    this.$store.dispatch('global/config/check', 'areaCode')
    this.globalEvent()
  },
  mounted() { },
  methods: {
    /**
     * @description: 全局事件
     * @return {*}
     */
    globalEvent() {
      // 全局点击事件
      document.querySelector('body').addEventListener('click', (evt) => {
        const className = evt.target.getAttribute('class')
        if (
          className !== 'options-item' &&
          !className?.includes('btn-areacode')
        ) {
          this.areaCodeVisible = false
        }
      })
    },
    /**
     * @description: 点击打开区号选择
     * @return {*}
     */
    handleAreaCode() {
      this.areaCodeVisible = true
    },
    /**
     * @description: 选择区号
     * @param {*} item 被选项
     * @return {*}
     */
    handleChecked(item) {
      this.checkedAreaCodeLabel = this.lang === 'zh'
        ? `${item.name} ${item.code}`
        : `${item.abbr} ${item.code}`
      this.areaCodeVisible = false
      this.$emit('change', item)
    }
  }
}
</script>
<style  lang="less" scoped>
.form-areacode {

  cursor: pointer;
  position: relative;
  padding: 0 20px;

  &__checked {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__options {
    position: absolute;
    top: -170px;
    left: -50px;
    z-index: 999;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid @color-border-gray;
    box-shadow: 0 0 10px 0 @color-shadow;
    animation: areaCode ease-in-out .2s;
    -webkit-animation: areaCode ease-in-out .2s;

    .options {
      &-wrapper {
        height: 400px;
        overflow-y: auto;
        overflow-x: hidden;
        .public-scroll;
      }

      &-item {
        box-sizing: border-box;
        display: block;
        padding: 5px;
        cursor: pointer;
        transition: all ease-in-out .2s;

        &:hover {
          background-color: @color-light-primary-20;
        }
      }
    }
  }

  // 区号选择的动画
  @keyframes areaCode {
    from {
      top: -150px;
      opacity: 0;
    }

    to {
      top: -170px;
      opacity: 1;
    }
  }
}

.disabled {
  pointer-events: none;
}
</style>
