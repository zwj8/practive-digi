<template>
  <div class="modal-bg" ref="comModal">
    <div class="content-wrap" :style="`width: ${width};height: ${height}`">
      <div v-if="!noClose" class="close">
        <span class="modal-name">{{ modalName }}</span>
        <i class="el-icon-error" @click="close"></i>
      </div>
      <header>
        <slot name="title" />
      </header>
      <div ref="modal" class="content modal-content">
        <div v-if="loading" class="modal-svg-wrapper" :style="`
          width: ${loadingWidth}px;
          height: ${loadingHeight}px;
        `">
          <svg viewBox="25 25 50 50" class="com-modal-circular">
            <circle cx="50" cy="50" r="20" fill="none" class="path" />
          </svg>
        </div>
        <slot />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComModal',
  props: {
    // 是否需要关闭按钮
    noClose: { type: Boolean, default: false },
    modalName: { type: String, default: '' },
    value: { type: Boolean, default: () => false },
    loading: { type: Boolean, default: false },
    width: { type: String, default: '60vw' },
    height: { type: String, default: '80%' }
  },
  components: {},
  filters: {},
  data() {
    return {
      loadingHeight: '',
      loadingWidth: ''
    }
  },
  computed: {},
  watch: {
    value(newValue) {
      if (newValue) {
        this.setClass(true)
      } else {
        document.querySelector('.modal-content').scrollTop = 0
        this.close()
      }
    },
    loading: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (newValue) {
          this.$nextTick(() => {
            this.loadingHeight = this.$refs.modal.offsetHeight
            // 宽度 - 40，padding 的数值
            this.loadingWidth = this.$refs.modal.offsetWidth - 40
          })
        }
      }
    }
  },
  created() { },
  mounted() {
    if (this.value) this.setClass(true)
  },
  methods: {
    /**
     * @description: 设置class
     * @param {Boolean} state 状态
     * @return {*}
     */
    setClass(state) {
      if (state) {
        this.$refs.comModal.classList.remove('modal--hidden')
        this.$refs.comModal.classList.add('modal--visible')
      } else {
        this.$refs.comModal.classList.remove('modal--visible')
        this.$refs.comModal.classList.add('modal--hidden')
      }
    },
    close() {
      this.setClass(false)
      this.$emit('close', false)
    }
  }

}
</script>
<style  lang="less" scoped>
h1 {
  font-size: 35px;
}

.modal-bg {
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-wrap {
    visibility: hidden;
    height: 80%;
    width: 60%;
    max-height: 90vh;
    padding-bottom: 20px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;

    header {
      padding-bottom: 20px
    }

    .close {
      box-sizing: border-box;
      padding: 14px;
      width: 100%;
      .flex-sbc;

      i {
        font-size: 25px;
        cursor: pointer;
      }

      .modal-name {
        font-size: 16px;
        font-weight: bold;
        line-height: 1;
      }
    }

    .content {
      box-sizing: border-box;
      padding: 0 20px;
      box-sizing: border-box;
      overflow-y: scroll;
      width: 100%;
      .public-scroll;
      position: relative;

      .modal-svg-wrapper {
        z-index: 999;
        position: fixed;
        background-color: rgba(255, 255, 255, .9);
        .flex-cc;
      }
    }

    .modal-footer {
      box-sizing: border-box;
      padding: 0 20px;
      padding-top: 10px;
      width: 100%;
    }
  }

  &.modal--visible {
    animation: comModalWrap .3s linear forwards;
    -webkit-animation: comModalWrap .3s linear forwards;

    /* Safari 和 Chrome */
    // animation-fill-mode: forwards; /* 动画结束保留属性值 */
    // -webkit-animation-fill-mode: forwards; /* Safari 和 Chrome */
    .content-wrap {
      visibility: visible;
      animation: comModalContent .2s linear forwards;
      -webkit-animation: comModalContent .2s linear forwards;
      /* Safari 和 Chrome */
    }
  }

  &.modal--hidden {
    animation: comModalWrapHide .3s linear forwards;
    -webkit-animation: comModalWrapHide .3s linear forwards;

    /* Safari 和 Chrome */
    // animation-fill-mode: forwards; /* 动画结束保留属性值 */
    // -webkit-animation-fill-mode: forwards; /* Safari 和 Chrome */
    .content-wrap {
      visibility: hidden;
      animation: comModalContentHide .2s linear forwards;
      -webkit-animation: comModalContentHide .2s linear forwards;
      /* Safari 和 Chrome */
    }
  }
}

@keyframes comModalWrap {
  from {
    background: rgba(0, 0, 0, 0);
    visibility: visible;
    z-index: 999;
  }

  to {
    visibility: visible;
    background: rgba(0, 0, 0, .4);
    z-index: 999;
  }
}

@keyframes comModalWrapHide {
  from {
    background: rgba(0, 0, 0, .4);
    visibility: visible;
    z-index: 999;
  }

  to {
    background: rgba(0, 0, 0, 0);
    visibility: hidden;
    z-index: -1;
  }
}

@keyframes comModalContent {
  from {
    top: 50px;
    opacity: 0;
    visibility: visible;
  }

  to {
    top: 0;
    opacity: 1;
    visibility: visible;
  }
}

@keyframes comModalContentHide {
  from {
    top: 0;
    opacity: 1;
    visibility: visible;
  }

  to {
    top: 50px;
    opacity: 0;
    visibility: hidden;
  }
}

.com-modal-circular {
  width: 42px;
  height: 42px;
  animation: comModalSvg 3s linear;
  animation-iteration-count: infinite;

  .path {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: @color-primary;
    stroke-linecap: round;
    animation: comModalSvgPath 2s cubic-bezier(1, .7, .5, .5);
    animation-iteration-count: infinite;
  }
}

@keyframes comModalSvg {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

  0% {
    transform: rotate(0deg);
  }
}

@keyframes comModalSvgPath {
  0% {
    stroke-dasharray: 150, 0;
    stroke-dashoffset: 150;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 90;
  }

  100% {
    stroke-dasharray: 150, 90;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 90;
  }

  0% {
    stroke-dasharray: 150, 0;
    stroke-dashoffset: 150;
  }
}
</style>
