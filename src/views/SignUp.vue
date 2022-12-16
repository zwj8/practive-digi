<template>
  <div class="register-page" v-loading="loading">
    <div class="user-form-container">
      <header>
        <h1>{{ signUpTitle }}</h1>
        <p>{{ $t('auth.signUp.desc') }}</p>
        <div class="line"></div>
      </header>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="110px"
        label-position="right"
      >
        <el-form-item
          class="style-reg-and-log-fix"
          :label="$t('auth.email')"
          prop="email"
        >
          <el-input
            v-model="form.email"
            :placeholder="$t('auth.placeholder_email')"
          ></el-input>
        </el-form-item>
        <el-form-item
          class="style-reg-and-log-fix"
          :label="$t('auth.secret')"
          prop="secret"
        >
          <el-input
            v-model="form.secret"
            type="password"
            :placeholder="$t('auth.placeholder_secret')"
          ></el-input>
        </el-form-item>
        <el-form-item
          class="style-reg-and-log-fix"
          :label="$t('auth.comfirm_secret')"
          prop="confirm_secret"
        >
          <el-input
            v-model="form.confirm_secret"
            type="password"
            :placeholder="$t('auth.placeholder_comfirm_secret')"
          ></el-input>
        </el-form-item>
        <el-form-item
          class="style-reg-and-log-fix phone-select-fix"
          :label="$t('auth.signUp.contact')"
          prop="phone"
        >
          <el-input
            v-model="form.phone"
            :placeholder="$t('auth.signUp.placeholder_contact')"
          >
            <el-select
              slot="prepend"
              v-model="form.areaCode"
              class="phone-code-select"
            >
              <el-option label="+86" value="+86"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item class="style-reg-and-log-fix" label="">
          <el-input
            v-model="form.captcha"
            :placeholder="$t('auth.signUp.placeholder_captcha')"
          >
            <el-button
              v-if="timerRun"
              slot="prepend"
              type="button"
              class="phone-code-select"
              >{{
                `${$t('auth.signUp.send_captcha')} (${timeSecouds} S)`
              }}</el-button
            >
            <el-button
              v-else
              slot="prepend"
              type="button"
              class="phone-code-select"
              @click.stop="sendCaptcha"
              >{{ $t('auth.signUp.send_captcha') }}</el-button
            >
          </el-input>
        </el-form-item>
        <el-form-item
          class="style-reg-and-log-fix"
          label-width="0"
          prop="agree"
        >
          <div class="agreement-item">
            <el-checkbox v-model="form.agree">
              {{ $t('auth.signUp.agree_tips') }}
            </el-checkbox>
            &nbsp;
            <span
              class="text-primary pointer"
              @click.stop="handlePolicy('service')"
              >{{ $t('auth.signUp.service_agreement') }}</span
            >
            &nbsp;
            <span :class="{ 'text-primary': form.agree }">{{
              $t('auth.signUp.and')
            }}</span>
            &nbsp;
            <span
              class="text-primary pointer"
              @click.stop="handlePolicy('privacy')"
              >{{ $t('auth.signUp.privacy_clause') }}</span
            >
          </div>
        </el-form-item>
        <div class="qr-code">
          <el-image
            :src="`${OSS_PREFIX}/default/service_qr_code.png`"
            style="height: 135px; width: 135px"
            alt="QR Code"
          />
          <span class="desc">{{ $t('auth.signUp.customer_serivce') }}</span>
        </div>
      </el-form>
      <div class="btn-register-wrap">
        <com-btn @click.native="register">{{
          $t('auth.signUp.btn_create')
        }}</com-btn>
      </div>
      <p class="footer-tips">
        <span class="text-gray">{{ $t('auth.signUp.has_account') }}</span>
        <el-link :underline="false" type="primary" @click="$router.push({ name: 'login' })">{{ $t('auth.signUp.to_login') }}</el-link>
      </p>
    </div>
    <prat-agreement
      :show="policyShow"
      :type="policyType"
      @close="closePolicy"
    />
  </div>
</template>
<script>
import util from '@/libs/util'
import AUTH_API from '@/api/auth'
import auth from '@/libs/auth'
import { OFFICIAL_WEBSITE } from '@/constants'
import PratAgreement from '@/components/part/PratAgreement'
export default {
  components: {
    PratAgreement
  },
  created () {
    this.getQuery()
  },
  computed: {
    signUpTitle () {
      if (this.form?.duid) return this.$t('auth.signUp.title_active')
      else return this.$t('auth.signUp.title')
    }
  },
  data () {
    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.form.secret) {
        callback(new Error(this.$t('valid.confirm_secret_error')))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      const reg = /^\d{11}$/
      // const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/
      if (value && !reg.test(value)) {
        callback(new Error(this.$t('valid.phone_error')))
      } else {
        callback()
      }
    }
    const validateAgree = (rule, value, callback) => {
      if (value) {
        callback()
      } else {
        callback(new Error(this.$t('auth.signUp.msg_agree')))
      }
    }
    return {
      loading: false,
      form: {
        email: '',
        secret: '',
        confirm_secret: '',
        phone: '',
        areaCode: '+86',
        agree: '',
        captcha: ''
      },
      timeStamp: null,
      timeSecouds: null,
      timerRun: false,
      policyShow: false,
      policyType: '',
      btnDisabled: true,
      rules: {
        email: [
          { required: true, message: this.$t('valid.email_required'), trigger: 'blur' },
          { type: 'email', message: this.$t('valid.email_type_error'), trigger: ['blur', 'change'] }
        ],
        secret: [{ required: true, message: this.$t('valid.secret_required'), trigger: 'blur' }],
        confirm_secret: [
          { validator: validateConfirmPassword, trigger: 'blur' },
          { required: true, message: this.$t('valid.confirm_secret_required'), trigger: 'blur' }
        ],
        phone: [{ required: true, validator: validatePhone, trigger: 'blur' }],
        agree: [
          { validator: validateAgree, trigger: 'blur' },
          { required: true, message: this.$t('valid.agreement_required'), trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    form: {
      deep: true,
      handler (newValue) {
        this.btnDisabled = false
        for (const key in newValue) {
          if (key === 'agree' && newValue[key] === false) {
            this.btnDisabled = true
          }
          if (newValue[key] === '') {
            this.btnDisabled = true
          }
        }
        return newValue
      }
    }
  },
  mounted () {
    this.loading = false
    // 利用本地缓存保存倒计时状态
    const timeStamp = util.lsGet('timestamp')
    if (timeStamp) {
      this.countdown(+timeStamp)
    }
  },
  methods: {
    // 获取URL参数
    getQuery () {
      if (this.$route.name !== 'distrActive' && !this.$route.query?.duid) return
      const urlParams = this.$route.query
      if (urlParams?.duid) {
        this.form.areaCode = urlParams?.area || ''
        this.form.phone = urlParams?.phone || ''
        this.form.email = urlParams?.email || ''
        if (urlParams?.duid) this.form.duid = urlParams?.duid || ''
      }
    },
    // 发送验证码
    sendCaptcha () {
      if (this.form.phone === '') {
        this.$message({
          type: 'warning',
          showClose: true,
          message: this.$t('valid.phone_null')
        })
        return false
      }
      this.$refs.form.validateField('phone', (phoneError) => {
        if (!phoneError) {
          AUTH_API.SendCaptcha({
            phone: this.form.phone,
            areaCode: this.form.areaCode
          }).then(res => {
            // 启动计时器
            this.countdown()
            this.$message({
              type: 'success',
              showClose: true,
              message: this.$t('auth.signUp.msg_captcha')
            })
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
    register () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          await AUTH_API.SignUp({
            email: this.form.email,
            secret: this.form.secret,
            phone: this.form.phone,
            areaCode: this.form.areaCode,
            captcha: this.form.captcha,
            aid: auth.getAid(),
            duid: this.form.duid || undefined
          }).then(res => {
            if (res?.success === true) {
              this.$message({
                type: 'success',
                message: '注册成功!',
                showClose: true,
                duration: 1500
              })
              window.location.href = this.$route.query?.callback || OFFICIAL_WEBSITE
            }
          }).catch(err => {
            this.$message({
              type: 'error',
              message: err?.warmMsg || err?.errorMsg || 'SignUp failed, try again',
              showClose: true,
              duration: 1500
            })
            this.loading = false
          })
        }
      })
    },
    // 协议
    handlePolicy (type) {
      this.policyType = type
      this.policyShow = true
    },
    closePolicy () {
      this.policyShow = false
    },
    // 发送验证码后设置倒计时
    countdown (ts) {
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
    }
  }
}
</script>
<style  lang="less" scoped>
@import '@/assets/part/part.auth.less';
.register-page {
  .reglog-public;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: inherit;
}
.btn-register-wrap {
  display: flex;
  justify-content: center;
}
.footer-tips {
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin-top: 33px;
}
.phone-code-select {
  width: 160px;
}

.agreement-item {
  display: flex;
  justify-content: center;
}

.el-form {
  position: relative;
  .qr-code {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
    position: absolute;
    right: -150px;
    bottom: 0;
    img {
      height: 135px;
      width: 135px;
    }
    .desc {
      font-size: 16px;
      margin-top: 12px;
    }
  }
}
</style>
