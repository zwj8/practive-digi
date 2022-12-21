<template>
  <div class="auth-wrapper">
    <!-- 大版心 -->
    <div class="auth-container">
      <!-- 版心里面的头部标题 -->
      <header class="auth-title">
        <div class="logo-wrapper flex-row">
          <img class="logo-image" referrerpolicy="no-referrer" :src="`${OSS_PREFIX}/default/digiads_logo.png`" />
        </div>
        <p class="smalltitlt-span">Account Activation</p>

      </header>
      <div class="card">
        <el-card>
          <div class="text-wrapper_1 flex-row">
            <h3 class="paragraph_1">
              If you do not receive the activation email,
            </h3>
            <h3 class="paragraph_1">
              try to click Send again.
            </h3>
          </div>
          <com-btn :loading="loading" type="fixed" class="com-btn" @click="SendAgain">Send Again</com-btn>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import AUTH_API from '@/api/auth'
export default {
  name: '',
  data() {
    return {
      email: this.$route.query.email,
      loading: false,
    }
  },
  created() {
  },
  computed: {
  },
  methods: {
    async SendAgain() {
      this.loading = true
      const params = {
        email: this.email
      }
      try {
        const res = await AUTH_API.ActiveEmail(params)
        this.loading = false
        console.log('发送邮件请求成功', res)
        //发送邮件失败
        if (!res.value) return this.$message.warning(res.errorMsg)
        //发送邮件成功
        this.$message.success('send successfully,Please go to the email to activate!')
      } catch (err) {
        console.log('发送邮件请求失败', err)
        this.$message.warning(err.errorMsg)
        this.loading = false
      }

      // AUTH_API.SendEmail(this.regisForm).then(res => {
      //     console.log('success', res)
      // }).catch(e => {
      //     console.log('error', e)
      // }).finally(() => {
      //     this.loading = false
      // })
      //邮箱账号不存在



    }
  },

}


</script>
<style lang="less" scoped>
p {
  margin: 0;
  z-index: 10;
}

.auth-wrapper {
  background-image: url('@{oss_prefix}/default/us_bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0px;
  // padding-bottom: 250px;
  padding-top: 130px;
  text-align: center;
  height: 700px;


  // 容器
  .auth-container {
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    position: relative;


    .card {
      position: absolute;
      width: 640px;
      left: 50%;
      margin-left: -320px;

      .text-wrapper_1 {
        opacity: 1;
        text-align: center;
      }

      .com-btn {
        margin-top: 15px;
        margin-bottom: 15px;
      }

      .el-input__inner {
        border-color: #fff;
        // width: 540px;

      }
    }


    // 标题
    .auth-title {
      margin-bottom: 40px;
      text-align: center;

      .logo-image {

        width: 290px;
        height: 80px;
      }



      // .paragraph_1 {
      //   overflow-wrap: break-word;
      //   color: rgba(40, 40, 40, 1);
      //   font-size: 24px;
      //   font-family: PingFangSC-Medium;
      //   font-weight: 700;
      //   line-height: 36px;
      //   // margin-left: -500px;
      // }

      .smalltitlt-span {
        line-height: 60px;
        color: #282828;
        line-height: 28px;
        margin-top: 50px;
        margin-bottom: 30px;
        font-size: 28px;
        font-family: PingFangSC-Medium;
        font-weight: 700;
      }


    }



    // margin: auto;
    .el-button--primary {
      background-color: #1436F5;
      margin-top: 40px;
    }

  }


}

/deep/.el-form-item__error {

  left: 8px;
}

/deep/.el-input__inner {
  border-radius: 4px;
  border: 1px solid #fff;
  border-bottom: 1px solid #D7D7D7;
  color: #606266;
  height: 40px;
  line-height: 40px;
  margin: 0 7px;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  // width: 100%;
}

/deep/ .el-input__prefix .el-input__icon {
  height: 108%;
  color: #1436F5;
  font-size: 17px;
}

/deep/.el-card__body {
  padding: 40px 0;
}
</style>
