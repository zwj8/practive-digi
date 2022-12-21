<template>
  <section>
    <van-row>
      <van-col span="24">
        <div class="header-wrapper">
          <span class="header-title">东坤 ID</span>
          <span class="header-desc">Welcome to DigiAds</span>
        </div>
      </van-col>
      <van-col span="24">
        <div class="form-wrapper">
          <!-- 账号密码登录 -->
          <van-form v-show="activeName === 'pw'" ref="formKey" :show-error-message="false">
            <van-field v-model="form.loginKey" size="large" :placeholder="$t('n_auth.placeholder.act')"
              :rules="pwRules.loginKey">
              <template #label>
                <div class="form-area">
                  <label class="form-area__label" for="select_area">
                    <span>{{ checkedAreaCodeLabel }}</span>
                    <div class="form-area__icon">
                      <van-icon name="arrow-up" />
                      <van-icon name="arrow-down" />
                    </div>
                    <select id="select_area" @change="selectChange">
                      <option v-for="item in areaCodeOptions" :key="item.addr" :value="`${JSON.stringify(item)}`">
                        {{ language == 'zh' ? `${item.name} ${item.code}` : `${item.abbr} ${item.code}` }}
                      </option>
                    </select>
                  </label>
                </div>
              </template>
            </van-field>
            <van-field v-model="form.secret" size="large" type="password" :rules="pwRules.secret"
              :placeholder="$t('auth.placeholder_secret')">
            </van-field>
          </van-form>

          <!-- 验证码登录 -->
          <van-form v-show="activeName === 'phone'" ref="formCaptcha" :show-error-message="false">
            <van-field v-model="form.phone" size="large" name="phone" :placeholder="$t('n_auth.placeholder.contact')"
              :rules="phoneRules.phone">
              <template #label>
                <div class="form-area">
                  <label class="form-area__label" for="select_area">
                    <span>{{ checkedAreaCodeLabel }}</span>
                    <div class="form-area__icon">
                      <van-icon name="arrow-up" />
                      <van-icon name="arrow-down" />
                    </div>
                    <select id="select_area" @change="selectChange">
                      <option v-for="item in areaCodeOptions" :key="item.addr" :value="`${JSON.stringify(item)}`">
                        {{ language == 'zh' ? `${item.name} ${item.code}` : `${item.abbr} ${item.code}` }}
                      </option>
                    </select>
                  </label>
                </div>
              </template>
            </van-field>
            <van-field v-model="form.captcha" center clearable name="captcha"
              :placeholder="$t('n_auth.placeholder.captcha')" :rules="phoneRules.captcha">
              <template #button>
                <span v-if="timerRun" class="captch-wait">{{ timeSecouds + $t('n_auth.msg.captcha_wait') }}</span>
                <van-button v-else size="small" :loading="captchaLoading" color="#385ff0"
                  @click.prevent="sendCaptcha({ modal: false })">{{ $t('n_auth.btn.captcha') }}</van-button>
              </template>
            </van-field>
          </van-form>
        </div>
      </van-col>
      <van-col span="24">
        <div class="agreement-wrapper">
          <span>{{ $t('n_auth.text.agree_tips') }}</span>
          <span class="agreement-label" @click="goPolicy('service')">{{ $t('n_auth.text.service') }}</span>
          <span>{{ $t('n_auth.text.and') }}</span>
          <span class="agreement-label" @click="goPolicy('privacy')">{{ $t('auth.signUp.privacy_clause') }}</span>
        </div>
      </van-col>
      <van-col span="24">
        <div class="btn-wrapper">
          <van-button :loading="loading" type="info" size="large" color="#385ff0" @click="validLogin">{{
              $t('n_auth.btn.login')
          }}</van-button>
        </div>
      </van-col>
      <van-col span="24">
        <div class="footer-wrapper">
          <span @click="handleType">{{ loginTypeLabel }}</span>
        </div>
      </van-col>
    </van-row>
    <!-- 手机验证弹窗 -->
    <van-popup v-model="modalVisible" :style="{ height: 'auto', width: '90%' }">
      <van-form ref="formModalCaptcha" :show-error-message="false">
        <van-field v-model="form.modalPhone" size="large" name="modalPhone"
          :placeholder="$t('n_auth.placeholder.contact')" :rules="modalRules.modalPhone">
          <template #label>
            <div class="form-area">
              <label class="form-area__label" for="select_area">
                <span>{{ checkedAreaCodeLabel }}</span>
                <div class="form-area__icon">
                  <van-icon name="arrow-up" />
                  <van-icon name="arrow-down" />
                </div>
                <select id="select_area" @change="selectChange">
                  <option v-for="item in areaCodeOptions" :key="item.addr" :value="`${JSON.stringify(item)}`">
                    {{ language == 'zh' ? `${item.name} ${item.code}` : `${item.abbr} ${item.code}` }}
                  </option>
                </select>
              </label>
            </div>
          </template>
        </van-field>
        <van-field v-model="form.modalCaptcha" center clearable name="modalCaptcha"
          :placeholder="$t('n_auth.placeholder.captcha')" :rules="modalRules.modalCaptcha">
          <template #button>
            <span v-if="timerRun" class="captch-wait">{{ timeSecouds + $t('n_auth.msg.captcha_wait') }}</span>
            <van-button v-else :loading="captchaLoading" size="small" color="#385ff0"
              @click.prevent="sendCaptcha({ modal: true })">{{ $t('n_auth.btn.captcha') }}</van-button>
          </template>
        </van-field>
        <div class="modal-btn">
          <van-button :loading="loading" type="info" size="large" color="#385ff0" @click="validateCaptcha">
            {{ $t('n_auth.btn.completed_sgin') }}
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </section>
</template>
<script>
import AUTH_API from '@/api/auth'
import util from '@/libs/util'
import { Form, Col, Row, Field, Icon, Button, Popup, Notify } from 'vant'
import { mapGetters } from 'vuex'
import { MOBILE_WEBSITE } from '@/constants'
export default {
  name: 'MobileLogin',
  mixins: [],
  components: {
    VanForm: Form,
    VanField: Field,
    VanCol: Col,
    VanRow: Row,
    VanIcon: Icon,
    VanButton: Button,
    VanPopup: Popup
  },
  filters: {},
  props: {},
  data() {
    return {
      loading: false,
      appKey: null,
      loginType: null,
      checkedAreaCodeLabel: '',
      loginTypeLabel: '验证码登录',
      modalVisible: false,
      activeName: 'pw',
      // 验证码计时器
      captchaLoading: false,
      timeSecouds: null,
      timerRun: false,
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
        modalPhone: [{ required: true, message: this.$t('valid.phone_required'), trigger: 'onBlur' }],
        modalCaptcha: [{ required: true, message: this.$t('valid.captcha_required'), trigger: 'onBlur' }]
      },
      phoneRules: {
        phone: [
          // { validator: validatePhone, trigger: 'onBlur' },
          { required: true, message: this.$t('valid.phone_required'), trigger: 'onBlur' }
        ],
        captcha: [{ required: true, message: this.$t('valid.captcha_required'), trigger: 'onBlur' }]
      },
      pwRules: {
        // 暂时不做任何限制
        loginKey: [
          { required: true, message: this.$t('valid.email_phone_required'), trigger: 'onBlur' }
          // { type: 'email', message: this.$t('valid.email_type_error'), trigger: ['onBlur', 'onChange'] }
        ],
        secret: [{ required: true, message: this.$t('valid.secret_required'), trigger: 'onBlur' }]
      }
    }
  },
  computed: {
    ...mapGetters('global/i18n', ['language']),
    ...mapGetters('global/config', ['areaCodeOptions'])
  },
  watch: {

    areaCodeOptions: {

      immediate: true,
      handler(value) {
        if (value?.length) {
          this.handleChecked(value[0])
        }
      }
    }
  },
  created() {
    this.initial()
  },

  methods: {
    /**
     * @description: 初始化
     * @return {*}
     */
    initial() {
      this.$store.dispatch('global/config/check', 'areaCode')
      this.loading = false
      this.appKey = this.$route.query?.appKey
      this.loginType = this.$route.query?.loginType
      this.tokenCheck()
      // 利用本地缓存保存倒计时状态
      const timeStamp = util.lsGet('timestamp')
      if (timeStamp) {
        this.countdown(+timeStamp)
      }
    },
    // checkLogin
    tokenCheck() {
      AUTH_API.tokenCheck({ appKey: this.appKey }).then(res => {
        if (res?.value?.isLogin) {
          window.location.href = `${res.value.callback}?token=${res.value.token}`
        } else {
          this.welcomeTitle = res.value.welcomeTitle
        }
      }).catch(e => { })
    },
    /**
     * @description: 选择区号
     * @param {*} evnet
     * @return {*}
     */
    selectChange(event) {
      let item = event.target.value
      if (item) {
        item = JSON.parse(item)
        this.handleChecked(item)
      }
    },
    /**
     * @description: 选择区号
     * @param {*} item 被选项
     * @return {*}
     */
    handleChecked(item) {
      this.checkedAreaCodeLabel = this.language === 'zh'
        ? `${item.name} ${item.code}`
        : `${item.abbr} ${item.code}`
      this.form.areaCode = item.code
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
      return params
    },
    validLogin() {
      const params = this.foramtParams()
      this.$refs[params.refName].validate().then(() => {
        this.Login()
      }).catch(e => console.log(e))
    },
    /**
     * @description: 登录/注册
     * @return {*}
     */
    Login() {
      this.loading = true
      const params = this.foramtParams()
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
              Notify({
                type: 'success',
                message: this.$t('n_auth.msg.login_success')
              })
              if (this.loginType === 'mobile') window.location.href = `${MOBILE_WEBSITE}?token=${res.value.token}`
              else window.location.href = `${res.value.callback}?token=${res.value.token}`
            } else {
              Notify({
                type: 'error',
                message: res.value?.errorTips
              })
            }
          }
        }
      }).catch(err => {
        Notify({
          type: 'error',
          message: err?.warmMsg || err?.errorMsg || 'Login failed, try again',
          duration: 1500
        })
      }).finally(() => {
        this.loading = false
      })
    },
    // 发送验证码
    sendCaptcha(args) {
      let phoneName = 'phone'
      let refName = 'formCaptcha'
      if (args?.modal) {
        phoneName = 'modalPhone'
        refName = 'formModalCaptcha'
      }

      this.$refs[refName].validate(phoneName).then(() => {
        this.captchaLoading = true
        AUTH_API.SendCaptcha({
          phone: this.form[phoneName],
          areaCode: this.form.areaCode
        }).then(res => {
          // 启动计时器
          this.countdown()
          Notify({
            type: 'success',
            message: this.$t('n_auth.msg.send_captcha')
          })
        }).finally(() => {
          this.captchaLoading = false
        })
      }).catch(e => {
        Notify({
          type: 'warning',
          message: e.message
        })
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
     * @description: 完成注册，手机和验证码验证
     * @return {*}
     */
    validateCaptcha() {
      this.$refs.formModalCaptcha.validate().then(() => {
        this.Login()
      }).catch(e => {
        console.log(e)
      })
    },
    /**
     * @description: 切换登录模式
     * @param {*} type
     * @return {*}
     */
    handleType() {
      this.$refs.formKey?.resetValidation()
      this.$refs.formCaptcha?.resetValidation()
      this.$refs.formModalCaptcha?.resetValidation()
      if (this.activeName === 'pw') {
        this.activeName = 'phone'
        this.loginTypeLabel = '密码登录'
      } else {
        this.activeName = 'pw'
        this.loginTypeLabel = '验证码登录'
      }
    },
    /**
     * @description: 跳转到协议页面
     * @param {*} type
     * @return {*}
     */
    goPolicy(type) {
      this.$router.push({
        name: 'policy',
        query: {
          type: type
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  &-wrapper {
    width: 100vw;
    height: 100px;
    background-color: @color-light-primary-80;
    .flex-cc;
    flex-flow: column;
  }

  &-title {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }

  &-desc {
    font-size: 18px;
    color: #fff;
  }
}

.form {
  &-wrapper {
    padding-top: 20px;
    margin-bottom: 20px;
    position: relative;

    &::after {
      .half-line;
    }
  }

  &-area {
    border-right: .5px solid @color-border-light-gray;
    font-size: 13px;

    &__icon {
      padding: 0 10px;
      display: inline-block;
      vertical-align: middle;

      &>i {
        font-size: 12px;
        display: block;
      }
    }

    &__label {
      position: relative;
      .flex-sbc;
      flex-flow: row nowrap;

      &>select {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        opacity: 0;
      }
    }
  }
}

.agreement {
  &-wrapper {
    text-align: center;

    &>span {
      color: @color-font-secondary;
      font-size: 12px;
      margin: 0 5px;
    }
  }

  &-label {
    position: relative;
    border-bottom: .5px solid @color-font-secondary;
  }
}

.btn {
  &-wrapper {
    margin-top: 20px;
    padding: 0 10px;
  }
}

.footer {
  &-wrapper {
    padding: 10px;
    padding-top: 20px;

    &>span {
      color: @color-light-primary-80;
    }
  }
}

/deep/ .van-field__label {
  width: auto;
}

// 验证码等待时间
.captch-wait {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  white-space: nowrap;
  color: @color-font-placeholder;
  vertical-align: bottom;
}
</style>
