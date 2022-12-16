<template>
  <section class="forget">
    <div class="forget-box">
      <h1>{{ $t('auth.forgot.title') }}</h1>
      <p>{{ $t('auth.forgot.desc') }}</p>
      <!-- 当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <el-form> 标签上添加 @submit.native.prevent。 -->
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="70px"
        label-position="right"
        @submit.native.prevent
      >
        <el-form-item
          class="style-reg-and-log-fix"
          :label="$t('auth.email')"
          prop="email"
        >
          <el-input
            v-model="form.email"
            class="input-fix"
            :placeholder="$t('auth.placeholder_email')"
          ></el-input>
        </el-form-item>
      </el-form>
      <com-btn :disabled="btnDisabled" @click.native="doNext">{{ $t('auth.forgot.btn_next') }}</com-btn>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      form: {
        email: ''
      },
      btnDisabled: true,
      rules: {
        email: [
          { required: true, message: this.$t('valid.email_required'), trigger: 'blur' },
          { type: 'email', message: this.$t('valid.email_type_error'), trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  watch: {
    form: {
      deep: true,
      handler (newValue) {
        this.btnDisabled = false
        if (newValue.email === '') this.btnDisabled = true
        return newValue
      }
    }
  },
  methods: {
    doNext () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$router.push({
            name: 'passwdReset',
            query: {
              email: this.form.email
            }
          })
        }
      })
    }
  }
}
</script>
<style  lang="less" scoped>
@import '@/assets/part/part.auth.less';
.m-b {
  margin-bottom: 20px;
}
.forget {
  .reglog-public;
  &-box {
    margin: 0 auto;
    width: 420px;
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
