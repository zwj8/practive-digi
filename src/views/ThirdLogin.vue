<template>
  <div style="background: #f0f2f5; margin-top: -20px; height: 100%">
    <el-card v-if="dialogVisible" shadow="never" class="el-card-center">
      <div slot="header" class="clearfix">
        <span>账号 {{ dialogData.bindingAccountName }} 已注册！</span>
        <br/>
        <span>请通过以下方式认证该账号：</span>
        <p/>
        <span class="text-muted text-xs">如果这不是您的账号，请关闭当前页面</span>
      </div>
      <el-tabs v-model="activeCheckName" type="card">
        <el-tab-pane label="短信验证" name="captcha" />
        <el-tab-pane label="密码验证" name="secret" />
      </el-tabs>
      <el-form :model="relateForm" label-width="100px">
        <!-- 短信验证 -->
        <el-form-item v-show="activeCheckName === 'captcha'" label="短信验证码">
          <el-input v-model="relateForm.captcha" placeholder="6 位验证码">
            <el-button
              v-if="!shortActive"
              slot="append"
              :loading="captchaBtnLoading"
              @click.native="sendCaptcha"
              >获取验证码</el-button
            >
            <template v-else slot="append">{{ shortCountdownText }}</template>
          </el-input>
        </el-form-item>
        <!-- 密码验证 -->
        <el-form-item v-show="activeCheckName === 'secret'" label="密码">
          <el-input v-model="relateForm.secret" show-password placeholder="您的登录密码"></el-input>
        </el-form-item>
        <el-form-item>
          <div>
            <el-button type="primary" :loading="confirmBtnLoading" @click="bindAccount">确认</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
    <div v-else class="page-center">
      <h3><i class="el-icon-loading"></i>&nbsp;{{ tips }}</h3>
    </div>
  </div>
</template>

<script>
// http://auth.local.superdigiads.com:8080/third-login?appId=PoLAzqeM88u8WUnB&accessCode=demo
import AUTH_API from '@/api/auth'
import { OFFICIAL_WEBSITE } from '@/constants'
const relateForm = {
  secret: '',
  captcha: ''
}
export default {
  props: {
    path: String
  },
  data () {
    return {
      confirmBtnLoading: false, // 确认按钮loading
      captchaBtnLoading: false, // 发送验证码按钮loading
      dialogVisible: false,
      loading: false,
      shortActive: false, // 短信验证码生效中
      activeCheckName: 'captcha', // 账号验证方式
      shortCountdown: 60, // 短信倒计时
      dialogData: {}, // 关联账号数据
      relateForm: { ...relateForm }, // 关联
      tips: '跳转中...'
    }
  },
  computed: {
    shortCountdownText () {
      return `${this.shortCountdown} 秒后重试`
    }
  },
  watch: {
    activeCheckName (newValue, oldValue) {
      this.resetForm()
    }
  },
  methods: {
    thirdPartSignIn () {
      this.loading = true
      const params = this.$route.query
      if (!params || !params.appId || !params.accessCode) {
        this.tips = '非法的请求地址！'
        return
      }

      AUTH_API.ThirdLogin(params).then(res => {
        console.log('res', res)
        this.loading = false
        if (res?.success === true && res.value?.token) { // 如果存在 token
          window.location.href = `${OFFICIAL_WEBSITE}?token=${res.value.token}`
        } else if (res?.success === true && res?.value?.thirdKey) { // 如果存在 thirdKey
          this.dialogData = { ...res.value }
          this.dialogVisible = true
          // this.sendCaptcha()
        } else {
          this.tips = '地址解析失败，请稍后重试！'
        }
      }).catch(e => {
        console.log(e)
        this.loading = false
        this.tips = '地址解析失败，请稍后重试！'
      })
    },
    // 获取短信验证码
    sendCaptcha () {
      this.captchaBtnLoading = true
      const params = {
        type: 'THIRD_BINDING',
        areaCode: this.dialogData.bindingAreaCode,
        phone: this.dialogData.bindingPhone
      }
      AUTH_API.SendCaptcha(params).then(res => {
        if (res?.success === true) {
          this.$message.success('短信验证码已发送', { showClose: true })
          this.shortActive = true
          this.countdown()
        }
      }).catch(e => { console.log(e) }).finally(() => {
        this.captchaBtnLoading = false
      })
    },
    // 绑定第三方账号
    bindAccount () {
      this.confirmBtnLoading = true
      const params = {
        thirdType: this.dialogData.thirdType,
        thirdKey: this.dialogData.thirdKey,
        bindingUid: this.dialogData.bindingUid,
        bindingPhone: this.dialogData.bindingPhone,
        bindingAreaCode: this.dialogData.bindingAreaCode
      }
      // 验证方式
      if (!this.relateForm[this.activeCheckName]) {
        this.$message.warning('密码或验证码不能为空', { showClose: true })
        return
      }
      params[this.activeCheckName] = this.relateForm[this.activeCheckName]
      AUTH_API.ThirdAccountBinding(params).then(res => {
        // 重置输入项
        this.resetForm()
        // 如果有token返回，则绑定成功
        if (res?.success === true && res.value?.token) {
          this.$message.success('绑定成功!', { showClose: true })
          window.location.href = `${OFFICIAL_WEBSITE}?token=${res.value.token}`
        } else {
          this.$message.error('绑定失败!', { showClose: true })
        }
        // 短信倒计时状态切换
        this.shortActive = false
      }).catch(e => { console.log(e) }).finally(() => {
        this.confirmBtnLoading = false
      })
    },
    // 倒计时方法
    countdown () {
      setTimeout(() => {
        if (this.shortCountdown > 0 && this.shortActive) {
          --this.shortCountdown
          this.countdown()
        } else {
          this.shortActive = false
        }
      }, 1000)
    },
    // 重置表单
    resetForm () {
      this.relateForm = { ...relateForm }
    }
  },
  mounted () {
    this.thirdPartSignIn()
  }
}
</script>

<style lang="less" scoped>
.page-center {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px auto 60px;
  top: 25%;
  padding: 0 100px;
  overflow: hidden;
}
.el-card-center {
  position: relative;
  margin: 20px auto 60px;
  top: 25%;
  width: 400px;
}
// 关联账号名
.bind-acc-name {
  font-size: 16px;
}
</style>
