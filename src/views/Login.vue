<template>
  <div class="auth-wrapper" v-loading="loading">
    <div class="auth-container">
      <header class="auth-title">
        <h1>{{ $t('n_auth.title') }}</h1>
        <p>{{ welcomeTitle }}</p>
      </header>
      <!-- 用户导航 -->
      <div class="login-nav">
        <div class="login-nav__wrap">
          <div class="btn-nav" :class="{ active: activeName === 'pw' }" @click="handleType('pw')">
            {{ $t('n_auth.type_pw') }}
          </div>
          <div class="btn-nav" :class="{ active: activeName === 'phone' }" @click="handleType('phone')">
            {{ $t('n_auth.type_phone') }}
          </div>
        </div>
      </div>
      <!-- 验证码登录 -->
      <el-form v-show="activeName === 'phone'" ref="formCaptcha" :rules="phoneRules" :model="form" label-width="90px"
        label-position="right" hide-required-asterisk>
        <!-- 手机号 -->
        <el-form-item :label="$t('n_auth.form.contact')" prop="phone">
          <el-input v-model="form.phone" :placeholder="$t('n_auth.placeholder.contact')">
            <!-- 区号选择 -->
            <com-area-code slot="prepend" @change="handleAreaCodeChange" />
          </el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="captcha">
          <div class="form-captcha">
            <el-input v-model="form.captcha" class="form-captcha__input"
              :placeholder="$t('n_auth.placeholder.captcha')"></el-input>
            <span v-if="timerRun" class="form-captcha__wait">
              {{ timeSecouds + $t('n_auth.msg.captcha_wait') }}
            </span>
            <el-button v-else @click="sendCaptcha" :loading="captchaLoading">{{ $t('n_auth.btn.captcha') }}</el-button>
          </div>
        </el-form-item>
      </el-form>
      <!-- 密码登录 -->
      <el-form v-show="activeName === 'pw'" ref="formKey" :rules="pwRules" :model="form" label-width="90px"
        label-position="right" hide-required-asterisk>
        <!-- 手机号 / 邮箱 -->
        <el-form-item :label="$t('n_auth.form.act')" prop="loginKey">
          <!-- @input="rulesChange" 输入不作任何限制 -->
          <el-input v-model="form.loginKey" :placeholder="$t('n_auth.placeholder.act')" @keyup.enter.native="Login">
            <!-- 区号选择 -->
            <com-area-code slot="prepend" @change="handleAreaCodeChange" />
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('auth.secret')" style="margin-bottom: 0;" prop="secret">
          <el-input v-model="form.secret" type="password" :placeholder="$t('auth.placeholder_secret')"
            @keyup.enter.native="Login"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="forgot-password">
            <span @click="toPath('/passwd/forget')">{{ $t('auth.login.forgot_passwd') }}</span>
          </div>
        </el-form-item>
      </el-form>
      <div class="footer-action">
        <div class="footer-action__agreement">
          <span>{{ $t('n_auth.text.agree_tips') }}</span>
          &nbsp;
          <span class="text-primary pointer" @click.stop="handlePolicy('service')">{{ $t('n_auth.text.service')
          }}</span>
          &nbsp;
          <span>{{ $t('n_auth.text.and') }}</span>
          &nbsp;
          <span class="text-primary pointer" @click.stop="handlePolicy('privacy')">{{ $t('auth.signUp.privacy_clause')
          }}</span>
        </div>
        <com-btn type="primary" @click="Login">{{ $t('n_auth.btn.login') }}</com-btn>
      </div>
      <div class="service-qr-code">
        <div class="service-qr-code__img">
          <el-image :src="`${OSS_PREFIX}/default/owner_qr_code.png`"></el-image>
        </div>
        <span class="service-qr-code__desc">{{ $t('n_auth.text.qr_code') }}</span>
      </div>
    </div>
    <prat-agreement :show="policyShow" :type="policyType" @close="closePolicy" />
    <!-- 手机验证弹窗 -->
    <com-modal class="modal-captcha-fix" :value="modalVisible" width="500px" height="300px" @close="modalClose">
      <el-form ref="formModalCaptcha" :rules="modalRules" :model="form" label-width="70px" label-position="right"
        hide-required-asterisk>
        <!-- 手机号 -->
        <el-form-item :label="$t('n_auth.form.contact')" prop="modalPhone">
          <el-input v-model="form.modalPhone" :placeholder="$t('n_auth.placeholder.contact')">
            <!-- 区号选择 -->
            <com-area-code slot="prepend" @change="handleAreaCodeChange" />
          </el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="modalCaptcha">
          <div class="form-captcha">
            <el-input v-model="form.modalCaptcha" class="form-captcha__input"
              :placeholder="$t('n_auth.placeholder.captcha')"></el-input>
            <span v-if="timerRun" class="form-captcha__wait">
              {{ timeSecouds + $t('n_auth.msg.captcha_wait') }}
            </span>
            <el-button v-else @click="sendCaptcha({ modal: true })" :loading="captchaLoading">{{
                $t('n_auth.btn.captcha')
            }}</el-button>
          </div>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="text-center">
          <com-btn type="primary" @click="validateCaptcha">{{ $t('n_auth.btn.completed_sgin') }}</com-btn>
        </div>
      </template>
    </com-modal>
  </div>
</template>
<script>

import AUTH_API from '@/api/auth'
import store from '@/store'
import util from '@/libs/util'
import auth from '@/libs/auth'
import PratAgreement from '@/components/part/PratAgreement'
import { LOCAL_URL } from '@/constants/config'
export default {
  components: {
    PratAgreement
  },
  created() {
    this.loading = false
    this.appKey = this.$route.query?.appKey
    this.tokenCheck()
    // 利用本地缓存保存倒计时状态
    const timeStamp = util.lsGet('timestamp')
    if (timeStamp) {
      this.countdown(+timeStamp)
    }
  },
  mounted() {
    store.dispatch('global/locate/setLocate', 'CN')
  },
  watch: {},
  computed: {},
  data() {
    // const validatePhone = (rule, value, callback) => {
    //   const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    //   if (value && !reg.test(value)) {
    //     callback(new Error(this.$t('valid.phone_error')))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      welcomeTitle: null,
      appKey: null,
      loading: false,
      activeName: 'pw',
      timestamp: null,
      timeSecouds: null,
      timerRun: false,
      policyType: null,
      policyShow: false,
      captchaLoading: false,
      // 手机验证码弹窗
      modalVisible: false,
      form: {
        phone: '',
        modalPhone: '',
        captcha: '',
        modalCaptcha: '',
        loginKey: '',
        secret: '',
        areaCode: ''
      },
      modalRules: {
        modalPhone: [{ required: true, message: this.$t('valid.phone_required'), trigger: 'blur' }],
        modalCaptcha: [{ required: true, message: this.$t('valid.captcha_required'), trigger: 'blur' }]
      },
      phoneRules: {
        phone: [
          // { validator: validatePhone, trigger: 'blur' },
          { required: true, message: this.$t('valid.phone_required'), trigger: 'blur' }
        ],
        captcha: [{ required: true, message: this.$t('valid.captcha_required'), trigger: 'blur' }]
      },
      pwRules: {
        // 暂时不做任何限制
        loginKey: [
          { required: true, message: this.$t('valid.email_phone_required'), trigger: 'blur' }
          // { type: 'email', message: this.$t('valid.email_type_error'), trigger: ['blur', 'change'] }
        ],
        secret: [{ required: true, message: this.$t('valid.secret_required'), trigger: 'blur' }]
      }
    }
  },
  methods: {
    // checkLogin
    tokenCheck() {
      AUTH_API.tokenCheck({ appKey: this.appKey }).then(res => {
        if (res?.value?.token) {
          window.location.href = `${res.value.callback}?token=${res.value.token}`
        } else {
          this.welcomeTitle = res.value.welcomeTitle
        }
      }).catch(e => { })
    },
    /**
     * @description: 设置欢迎标题
     * @param {*} text
     * @return {*}
     */
    setWelcomeTitle(text) {
      this.welcomeTitle = text
    },
    /**
     * @description: 切换登录模式
     * @param {*} type
     * @return {*}
     */
    handleType(type) {
      this.$refs.formKey.clearValidate()
      this.$refs.formCaptcha.clearValidate()
      this.activeName = type
    },
    /**
     * @description: 处理登录/注册传参
     * @return {*} 返回传参
     */
    foramtParams() {
      const params = {
        refName: '',
        params: {
          appKey: this.appKey || 'DIGIADS-WEB'
        }
      }
      // 根据登录/注册方式，判断传参
      if (this.activeName === 'phone') {
        params.refName = 'formCaptcha'
        params.params.phone = this.form.phone
        params.params.captcha = this.form.captcha
      } else {
        params.refName = 'formKey'
        params.params.loginKey = this.form.loginKey
        params.params.secret = this.form.secret
        if (this.form.modalPhone && this.form.modalCaptcha) {
          params.params.phone = this.form.modalPhone
          params.params.captcha = this.form.modalCaptcha
        }
      }
      // 区号
      params.params.areaCode = this.form.areaCode
      // aid
      if (auth.getAid()) params.params.aid = auth.getAid()
      // duid
      if (this.$route.query?.duid) params.duid = this.$route.query.duid
      return params
    },
    /**
     * @description: 登录/注册
     * @return {*}
     */
    Login() {
      const params = this.foramtParams()
      this.$refs[params.refName].validate(async (valid) => {
        if (!valid) return false
        this.loading = true
        AUTH_API.LoginAndSign(params.params).then(res => {
          if (res?.success === true) {
            // 需要手机验证码
            if (res.value?.needCaptcha) {
              this.modalVisible = true
              // 验证是否是纯数字
              const regExp = /^\d+$/
              // 如果是纯数字，则自动填到phone里
              if (regExp.test(this.form.loginKey)) this.form.modalPhone = this.form.loginKey
            } else {
              // 不需要验证码，是否有token
              if (res.value.token) {
                this.$message({
                  type: 'success',
                  message: this.$t('n_auth.msg.login_success'),
                  showClose: true,
                  duration: 1500
                })
                let callbackUrl = ''
                const isLocal = util.isLocal()
                if (isLocal) {
                  const hit = LOCAL_URL.find(v => params.params.appKey === v.code)
                  if (hit) callbackUrl = `${hit.callback}?token=${res.value.token}`
                } else callbackUrl = `${res.value.callback}?token=${res.value.token}`
                window.location.href = callbackUrl
              } else {
                this.$message.error(res.value?.errorTips)
              }
            }
          }
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err?.warmMsg || err?.errorMsg || 'Login failed, try again',
            showClose: true,
            duration: 1500
          })
        }).finally(() => {
          this.loading = false
        })
      })
    },
    /**
     * @description: 路由跳转
     * @param {*} path 要跳转的路径
     * @return {*}
     */
    toPath(path) {
      this.$router.push(path)
    },
    /**
     * @description: 区号改变
     * @param {*} item 被选中的区号
     * @return {*}
     */
    handleAreaCodeChange(item) {
      // const hit = mobileRegExp.find(v => v.code === item.addr)
      // if (hit) this.phoneReg = hit.reg
      // else this.phoneReg = /[0-9]+/
      this.form.areaCode = item.code
    },
    // 发送验证码
    sendCaptcha(args) {
      let phoneName = 'phone'
      let refName = 'formCaptcha'
      if (args.modal) {
        phoneName = 'modalPhone'
        refName = 'formModalCaptcha'
      }
      if (this.form[phoneName] === '') {
        this.$message({
          type: 'warning',
          showClose: true,
          message: this.$t('valid.phone_null')
        })
        return false
      }
      this.$refs[refName].validateField(phoneName, (phoneError) => {
        if (!phoneError) {
          this.captchaLoading = true
          AUTH_API.SendCaptcha({
            phone: this.form[phoneName],
            areaCode: this.form.areaCode
          }).then(res => {
            // 启动计时器
            this.countdown()
            this.$message({
              type: 'success',
              showClose: true,
              message: this.$t('n_auth.msg.send_captcha')
            })
          }).finally(() => {
            this.captchaLoading = false
          })
        } else {
          this.$message({
            type: 'error',
            showClose: true,
            message: phoneError
          })
        }
      })
    },
    /**
     * @description: 发送验证码后设置倒计时
     * @param {*} ts 初始值
     * @return {*}
     */
    countdown(ts) {
      const now = new Date()
      this.timeSecouds = ts
        ? parseInt((ts - now.getTime()) / 1000) <= 0
          ? 0
          : parseInt((ts - now.getTime()) / 1000)
        : 60
      if (this.timeSecouds <= 0) {
        const timer = util.lsGet('registerTimer')
        util.lsRemove('timestamp')
        clearInterval(timer)
        return false
      }
      this.timerRun = true
      !ts && util.lsSet('timestamp', now.getTime() + 60 * 1000)
      const countdown = () => {
        setTimeout(() => {
          this.timeSecouds -= 1
          if (+this.timeSecouds <= 0) {
            util.lsRemove('timestamp')
            this.timerRun = false
          } else {
            countdown()
          }
        }, 1000)
      }
      countdown()
    },
    /**
     * @description: 验证规则切换
     * @return {*}
     */
    rulesChange(val) {
      if (val && val.includes('@')) {
        const loginKeyRules = [
          { required: true, message: this.$t('valid.email_or_phone'), trigger: 'blur' },
          { type: 'email', message: this.$t('valid.email_type_error'), trigger: 'blur' }
        ]
        this.$set(this.pwRules, 'loginKey', loginKeyRules)
      } else {
        const loginKeyRules = [
          { required: true, message: this.$t('valid.email_or_phone'), trigger: 'blur' }
        ]
        this.$set(this.pwRules, 'loginKey', loginKeyRules)
      }
    },
    // 协议
    handlePolicy(type) {
      this.policyType = type
      this.policyShow = true
    },
    closePolicy() {
      this.policyShow = false
    },
    // 手机验证模态框关闭
    modalClose() {
      this.modalVisible = false
      this.form.modalPhone = ''
      this.form.modalCaptcha = ''
    },
    /**
     * @description: 手机和验证码验证
     * @return {*}
     */
    validateCaptcha() {
      this.$refs.formModalCaptcha.validate(valid => {
        if (valid) this.Login()
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/part/part.auth.less';

.auth-wrapper {
  .reglog-public;

  // 容器
  .auth-container {
    height: 600px;
    width: 500px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;

    // 标题
    .auth-title {
      .text-center;
      margin-bottom: 50px;
    }

    // 登录方式切换
    .login-nav {
      width: 100%;
      border-bottom: 1px solid @color-light-gray;
      display: flex;
      justify-content: center;
      margin-bottom: 40px;

      &__wrap {
        width: 20%;
        min-width: 300px;
        display: flex;
        justify-content: space-between;
        flex: row nowrap;

        .btn-nav {
          font-size: 20px;
          padding: 10px;
          box-sizing: border-box;
          border-bottom: 6px solid #fff;
          cursor: pointer;
          transition: all ease-in-out 0.3s;

          &.active {
            color: @color-primary;
            border-bottom: 6px solid @color-primary;
          }
        }
      }
    }

    // 按钮
    .footer-action {
      .text-center;

      &__agreement {
        margin-bottom: 20px;
        font-size: 14px;
        //  color: @color-font-placeholder;
      }
    }

    // 客服二维码
    .service-qr-code {
      position: absolute;
      top: 260px;
      right: -120px;

      &__img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
      }

      &__desc {
        display: block;
        width: 100px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}

.forgot-password {
  display: flex;
  justify-content: flex-end;

  span {
    height: 30px;
    color: @color-font-secondary;
    cursor: pointer;
    border-bottom: 1px solid @color-font-secondary;
  }
}

.modal-captcha-fix {
  /deep/ .content {
    overflow-y: visible !important;
  }
}

// 区号选项
/deep/ .el-input-group__prepend {
  background-color: #fff;
  padding: 0;
}

// 验证码
.form-captcha {
  display: flex;
  flex-flow: row nowrap;

  &__input {
    margin-right: 10px;
  }

  // 验证码等待时间
  &__wait {
    white-space: nowrap;
    color: @color-font-placeholder;
  }
}
</style>
