<template>
  <button v-if="!download" type="button" :disabled='disabled' :class="[
    'btn',
    `btn-type-${type}`,
    `btn-size-${size}`,
    { 'btn-disabled': disabled }
  ]" @click="handleClick">
    <div class="btn-loading" :class="`loading-vis--${loading ? 'visible' : 'hidden'}`">
      <i class="el-icon-loading"></i>
    </div>
    <div :class="`loading-vis--${!loading ? 'visible' : 'hidden'}`">
      <slot />
    </div>
  </button>
  <a v-else :href="download" :class="[
    'btn',
    `btn-type-${type}`,
    `btn-size-${size}`,
    { 'btn-disabled': disabled }
  ]" @click="handleClick">
    <slot />
  </a>
</template>
<script>
export default {
  name: 'ComBtn',
  props: {
    // 是否显示加载
    loading: { type: Boolean, default: false },
    // big basic mini
    size: { type: String, default: 'basic' },
    // default primary black fixed
    type: { type: String, default: 'default' },
    // 按钮是否禁用
    disabled: { type: Boolean, default: false },
    // 是否是下载按钮
    download: { type: String, default: '' }
  },
  components: {},
  filters: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    /**
     * @description: 这样做，可以在使用组件点击事件时不用加.native
     * @param {*} evt
     * @return {*}
     */
    handleClick(evt) {
      // 在loading状态时，不可重复点击
      if (this.loading) return
      this.$emit('click', evt)
    }
  }
}
</script>
<style  lang="less" scoped>
@border-size: 2px; // 按钮边框

// 按钮样式
.btn {
  position: relative;
  display: inline-block;
  color: @color-font-black;
  cursor: pointer;
  white-space: nowrap;
  // 不可选中
  .no-select;

  // 按键风格
  // 背景透明,边框黑,经过透明
  &.btn-type-default {
    color: @color-font-black;
    border: @border-size solid @color-font-black;
    background: transparent;

    &:hover {
      transition: all ease-in-out 0.2s;
      color: @color-primary;
      border: @border-size solid @color-primary;
    }
  }

  // 背景蓝,边框蓝,经过透明
  &.btn-type-bg-primary {
    color: #fff;
    background: @color-primary;
    border: @border-size solid @color-primary;

    &:hover {
      transition: all ease-in-out 0.2s;
      color: @color-primary;
      border: @border-size solid @color-primary;
      background: transparent;
    }
  }

  // 背景黑,边框黑,经过透明
  &.btn-type-bg-black {
    color: #fff;
    background: @color-font-black;
    border: @border-size solid @color-font-black;

    &:hover {
      transition: all ease-in-out 0.2s;
      color: @color-font-black;
      border: @border-size solid @color-font-black;
      background: transparent;
    }
  }

  // 背景透明,边框蓝,经过蓝
  &.btn-type-primary {
    color: @color-primary;
    background: transparent;
    border: @border-size solid @color-primary;

    &:hover {
      transition: all ease-in-out 0.2s;
      color: #fff;
      border: @border-size solid @color-primary;
      background: @color-primary;
    }
  }

  // 背景透明,边框黑,经过黑
  &.btn-type-black {
    color: @color-font-black;
    background: transparent;
    border: @border-size solid @color-font-black;

    &:hover {
      transition: all ease-in-out 0.2s;
      color: #fff;
      border: @border-size solid @color-font-black;
      background: @color-font-black;
    }
  }

  // 固定宽度，出题色背景
  &.btn-type-fixed {
    width: 320px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    background: @color-primary;
    border: @border-size solid @color-primary;
    border-radius: 5px !important;
    padding: 10px !important;
    font-size: 25px !important;

    &:hover {
      transition: all ease-in-out 0.2s;
      background: @color-light-primary-80;
      border: @border-size solid @color-light-primary-80;
    }
  }

  // 按键大小
  &.btn-size-big {
    font-size: 26px;
    border-radius: 30px;
    padding: 10px 20px;
  }

  &.btn-size-basic {
    font-size: 16px;
    border-radius: 20px;
    padding: 8px 15px;
  }

  &.btn-size-small {
    font-size: 16px;
    border-radius: 20px;
    padding: 6px 15px;
  }

  &.btn-size-mini {
    font-size: 13px;
    border-radius: 20px;
    padding: 6px 15px;
  }
}

// 如果前方有按钮，则分隔10px
.btn+.btn {
  margin-left: 10px;
}

// 按钮禁用
.btn-disabled {
  opacity: 0.5;
  .not-allowed;
}

.btn-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-vis--visible {
  visibility: inherit; // 使用继承，当放在com-model中时，可以根据模态框的显示情况切换
}

.loading-vis--hidden {
  visibility: hidden;
}
</style>
