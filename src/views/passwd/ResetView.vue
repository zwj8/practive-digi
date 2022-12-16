<template>
  <section class="reset">
    <div v-if="isReseting" class="reset-box">
      <h1>{{ $t('auth.forgot.title') }}</h1>
      <span class="text-success">{{ $t('auth.forgot.placeholder_email_tips', { email: email }) }}</span>
      <br />
      <el-form ref="form" :model="form" :rules="rules" label-width="120px" label-position="right">
        <el-form-item class="style-reg-and-log-fix" :label="$t('auth.forgot.email_captcha')" prop="code">
          <el-input v-model="form.code" class="input-fix" type="text"
            :placeholder="$t('auth.forgot.placeholder_email_captcha')"></el-input>
        </el-form-item>
        <el-form-item class="style-reg-and-log-fix" :label="$t('auth.new_secret')" prop="password">
          <el-input v-model="form.password" class="input-fix" type="password"
            :placeholder="$t('auth.placeholder_new_secret')"></el-input>
        </el-form-item>
        <el-form-item class="style-reg-and-log-fix" :label="$t('auth.comfirm_secret')" prop="confirm_password">
          <el-input v-model="form.confirm_password" class="input-fix" type="password"
            :placeholder="$t('auth.placeholder_comfirm_secret')"></el-input>
        </el-form-item>
      </el-form>
      <com-btn :disabled="btnDisabled" @click.native="resetPasswd">{{ $t('auth.forgot.btn_comfirm') }}</com-btn>
    </div>
    <div v-else class="reset-box">
      <h1>{{ $t('auth.forgot.reseted_title') }}</h1>
      <p>{{ $t('auth.forgot.success') }}</p>
    </div>
  </section>
</template>
<script>
import AUTH_API from '@/api/auth'
export default {
  components: {},
  data () {
    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error(this.$t('valid.confirm_secret_error')))
      } else {
        callback()
      }
    }
    return {
      isReseting: true,
      form: {
        code: '',
        password: '',
        confirm_password: ''
      },
      email: '',
      btnDisabled: true,
      rules: {
        code: [{ required: true, message: this.$t('valid.email_captcha_required'), trigger: 'blur' }],
        password: [{ required: true, message: this.$t('valid.secret_required'), trigger: 'blur' }],
        confirm_password: [
          { validator: validateConfirmPassword, trigger: 'blur' },
          { required: true, message: this.$t('valid.confirm_secret_required'), trigger: 'blur' }
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
          if (newValue[key] === '') {
            this.btnDisabled = true
          }
        }
        return newValue
      }
    }
  },
  methods: {
    sendResetCaptcha () {
      AUTH_API.SendEmail({
        email: this.email
      }).then(res => {
        this.$message({
          type: 'success',
          showClose: true,
          message: this.$t('auth.forgot.msg_send')
        })
      })
    },
    resetPasswd () {
      this.$refs.form.validate(valid => {
        if (valid) {
          AUTH_API.ResetSecret({
            email: this.email,
            captcha: this.form.code,
            secret: this.form.confirm_password
          }).then(res => {
            this.$message({
              type: 'success',
              showClose: true,
              message: this.$t('auth.forgot.success')
            })
            this.isReseting = false
            this.$router.push('/logout')
          })
        }
      })
    }
  },
  mounted () {
    // 如果email为空，则直接跳回首页
    if (this.$route?.query?.email) {
      // 设置email
      this.email = this.$route.query.email
      this.sendResetCaptcha()
    } else {
      this.$message({
        type: 'error',
        showClose: true,
        message: this.$t('auth.forgot.msg_invalid_operation'),
        duration: 800
      })
      this.$router.push('/passwd/forget')
    }
  }
}
</script>
<style  lang="less" scoped>
@import '@/assets/part/part.auth.less';
.m-b {
  margin-bottom: 30px;
}
.reset {
  .reglog-public;
  &-box {
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-flow: column;
    align-items: center;
    h1 {
      .m-b;
    }
    p {
      line-height: 30px;
      text-align: center;
      .m-b;
    }
    .el-form {
      width: 100%;
      .m-b;
    }
  }
}
</style>
