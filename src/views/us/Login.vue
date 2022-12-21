<template>
  <div class="auth-wrapper">
    <div class="auth-container">
      <!-- 版心里面的头部标题 -->
      <header class="auth-title">
        <div class="logo-wrapper flex-row">
          <img class="logo-image" referrerpolicy="no-referrer" :src="`${OSS_PREFIX}/default/digiads_logo.png`" />
        </div>
        <p class="smalltitlt-span">Good&nbsp;choice.</p>
      </header>
      <el-card>
        <!-- 邮箱密码登录/注册 -->
        <el-form label-position="left" ref="loginForm" :model="loginForm" :rules="loginRules">
          <el-form-item prop="loginKey" class="email">
            <el-input v-model="loginForm.loginKey" placeholder="Business email" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
          <el-form-item class="clear-margin" prop="secret">
            <el-input type="password" v-model="loginForm.secret" placeholder="Password" @keyup.enter.native="Login"
              prefix-icon="el-icon-unlock">
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="fotget">
              <span class="fotget-right" @click="$router.push('/us/password')">Forgot password</span>
            </div>
          </el-form-item>
          <el-form-item class="text-center">
            <com-btn :loading="loading" type="fixed" @click="Login">SIGN UP / LOG IN</com-btn>
          </el-form-item>
        </el-form>

        <!-- 同意协议部分 -->
        <div class="footer-action">
          <div class="footer-action__agreement">
            <span class="gray">By registering, you have read and agreed</span>
            &nbsp;
            <span class="text-primary pointer" @click.stop="handlePolicy('service')">terms & conditions</span>
            &nbsp;
            <span class="gray">and</span>
            &nbsp;
            <span class="text-primary pointer" @click.stop="handlePolicy('privacy')">privacy policy</span>
          </div>
        </div>
      </el-card>
      <!-- 底部商业logo标志 -->
      <!-- <BusinessTitle></BusinessTitle> -->
      <!-- 各类协议弹窗 -->
      <PratAgreement :show="policyShow" :type="policyType" @close="closePolicy"></PratAgreement>
    </div>
  </div>
</template>
<script>
import util from '@/libs/util'
import AUTH_API from '@/api/auth'
import PratAgreement from '@/components/northcommon/part/PratAgreement.vue'
import store from '@/store'
// import BusinessTitle from '@/components/northcommon/BusinessTitle.vue'
export default {
  components: { PratAgreement },
  data() {
    return {
      //登录表单
      loginForm: {
        loginKey: '',
        secret: ''
      },
      //验证表单
      loginRules: {
        loginKey: [{ required: true, trigger: 'blur', message: 'Mailbox account cannot be empty!' },
        { type: 'email', message: 'Mailbox account cannot be empty!', trigger: ['blur', 'change'] }
        ],
        secret: [
          { required: true, trigger: 'blur', message: 'The password is required!' },
          { min: 6, max: 16, message: 'The length of the password is between 6 and 16 bits!', trigger: 'blur' }
        ]
      },
      //控制各类协议显示还是隐藏
      policyShow: false,
      //控制显示模式时显示的是哪一个协议
      policyType: null,
      loading: false
    }
  },
  created() {
    //初始化自动填充邮箱密码
    const query = this.$route.query
    if (query?.email) this.loginForm.loginKey = query.email
    if (query?.secret) this.loginForm.secret = window.atob(query.secret)


  },
  mounted() {
    store.dispatch('global/locate/setLocate', 'US')

  },
  methods: {
    Login() {
      this.$refs.loginForm.validate(valid => {
        if (!valid) return
        this.loading = true
        AUTH_API.LoginAndSign(this.loginForm)
          .then(res => {
            console.log('LoginAndSign', res)
            // 账号正常登录(有返回token)
            if (res?.value?.token) {
              this.$message({
                type: 'success',
                message: 'success',
                showClose: true,
                duration: 1500
              })
              let callbackUrl = ''
              const isLocal = util.isLocal()
              if (isLocal) {
                callbackUrl = `http://www.local.superdigiads.com:8081/us/callback?token=${res.value.token}`
              } else callbackUrl = `${res.value.callback}?token=${res.value.token}`
              window.location.href = callbackUrl
            } else if (!res?.value?.isLogin) {
              // 101001 为账号未注册
              if (res?.value?.error?.code === 101001) {
                // 账号未注册
                this.$confirm('Account not registered, whether to go to register?', 'Account not registered', {
                  confirmButtonText: 'Yes',
                  cancelButtonText: 'Cancel',
                  type: 'warning'
                }).then(() => {
                  // 跳转注册页面，并带上邮箱和密码（base64编码）
                  const pswTo64 = window.btoa(this.loginForm.secret)
                  this.$router.push({
                    name: 'usRegister',
                    query: {
                      email: this.loginForm.loginKey,
                      secret: pswTo64
                    }
                  })
                }).catch(() => { })
              } else {
                this.$message({
                  type: 'warning',
                  message: res.value.errorTips,
                  duration: 1500
                })
              }
            } else if (res?.value?.isLogin && !res?.value?.isActive) {
              // 已注册未激活
              this.$message.success(res.value.welcomeTitle)
              //修改完密码跳转过来会显示已注册未激活

              //跳转到激活页面
              this.$router.push(`/us/wait-active?email=${this.loginForm.loginKey}`)
            }
          })
          .catch(e => console.log(e))
          .finally(() => {
            this.loading = false
          })
      })
    },
    //点击服务协议打开弹框
    handlePolicy(type) {
      //控制各类协议显示还是隐藏
      this.policyShow = true
      //控制显示模式时显示的是哪一个协议
      this.policyType = type
    },
    //点击关闭协议弹窗
    closePolicy() {
      this.policyShow = false
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/part/part.us.auth.less';

.auth-wrapper {
  .common-wrapper;

  .auth-container {
    width: 660px;
    height: 560px;

    // 标题
    .auth-title {
      margin-bottom: 50px;
      text-align: center;

      .logo-image {
        width: 300px;
        height: 80px;
      }

      .smalltitlt-span {
        color: #282828;
        font-size: 30px;
        font-family: PingFangSC-Medium;
        font-weight: 700;
        margin-bottom: 60px;
        margin-top: 15px;
      }
    }

    .fotget {
      cursor: pointer;
      text-align: right;

      &-right {
        color: @color-font-secondary;
        border-bottom: 1px solid @color-hide;

        &:hover {
          border-bottom: 1px solid @color-font-secondary;
        }
      }
    }
  }

  // 按钮
  .footer-action {
    .text-center;
    margin-top: 10px;
    font-size: 15px;

    .gray {
      width: 555px;
      height: 15px;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #aaaab0;
      line-height: 60px;
    }
  }
}

/deep/.el-button {
  background-color: #1436f5;
}

/deep/.el-card__body {
  padding: 30px;
}

//每个input框
/deep/.el-input__inner {
  border-radius: 4px;
  border: 1px solid #fff;
  border-bottom: 1px solid #d7d7d7;
  color: #606266;
  height: 45px;
  line-height: 48px;
  margin: 0 7px;
  // padding: 3px 0;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

/deep/ .el-input__prefix .el-input__icon {
  height: 108%;
  color: #1436f5;
  font-size: 17px;
}

/deep/ .clear-margin {
  margin-bottom: 0;
}

/deep/ .el-form-item__error {
  margin-left: 10px;
}
</style>
