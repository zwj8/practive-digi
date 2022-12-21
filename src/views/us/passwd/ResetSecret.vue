<template>
    <section class="reset">
        <div v-if="isReseting" class="reset-box">
            <h1>Reset Passwords</h1>
            <span class="text-success">The verification code has been sent to the email address: email </span>
            <br />
            <el-form ref="form" :model="form" :rules="rules" label-position="right">
                <el-form-item class="style-reg-and-log-fix" label="Email verification code" prop="code">
                    <el-input v-model="form.code" class="input-fix" type="text"
                        placeholder="Please enter a 6-digit verification code!"></el-input>
                </el-form-item>
                <el-form-item class="style-reg-and-log-fix" label="Enter a new password" prop="password">
                    <el-input v-model="form.password" class="input-fix" type="password"
                        placeholder="Please enter a new password!"></el-input>
                </el-form-item>
                <el-form-item class="style-reg-and-log-fix" label="confirm password" prop="confirm_password">
                    <el-input v-model="form.confirm_password" class="input-fix" type="password"
                        placeholder="Please enter your password again!"></el-input>
                </el-form-item>
            </el-form>
            <com-btn type="bg-primary" :disabled="btnDisabled" :loading="loading" @click.native="resetPasswd"
                style="font-size: 26px;" class="btn-1">confirm modification</com-btn>
        </div>
        <!-- 重置过邮箱了才展示 -->
        <div v-else class="reset-box">
            <h1>The password has been reset!</h1>
            <p>Please return to the login page and log in again.</p>
        </div>
    </section>
</template>
<script>
import AUTH_API from '@/api/auth'
export default {
    components: {},
    data() {
        //再次确认密码的校验
        const validateConfirmPassword = (rule, value, callback) => {
            if (value !== this.form.password) {
                callback(new Error('Two passwords are different!'))
            } else {
                callback()
            }
        }
        return {
            //重置密码时显示
            isReseting: true,
            form: {
                code: '',
                password: '',
                confirm_password: ''
            },
            loading: false,
            email: '',
            btnDisabled: true,
            rules: {
                code: [{ required: true, message: 'Please enter the email verification code!', trigger: 'blur' }],
                password: [{ required: true, message: 'Please enter a new password!', trigger: 'blur' }],
                confirm_password: [
                    { validator: validateConfirmPassword, trigger: 'blur' },
                    { required: true, message: 'Please enter your password again!', trigger: 'blur' }
                ]
            }
        }
    },
    watch: {
        //监听表单值的变化,如果有输入,按钮就启用,没有就禁用
        form: {
            deep: true,
            handler(newValue) {
                console.log(newValue);
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
        // sendResetCaptcha() {
        //     AUTH_API.SendEmail({
        //         email: this.email
        //     }).then(res => {
        //         this.$message({
        //             type: 'success',
        //             showClose: true,
        //             message: this.$t('auth.forgot.msg_send')
        //         })
        //     })
        // },
        resetPasswd() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true
                    AUTH_API.ResetSecret({
                        email: this.email,
                        captcha: this.form.code,
                        secret: this.form.confirm_password
                    }).then(res => {
                        this.loading = false
                        this.$message({
                            type: 'success',
                            showClose: true,
                            message: 'The password has been reset!'
                        })
                        this.isReseting = false
                        //跳转携带邮箱和新密码
                        const pswTo64 = window.btoa(this.form.confirm_password)
                        this.$router.push({
                            name: 'usLogin',
                            query: {
                                email: this.email,
                                secret: pswTo64
                            }
                        })
                    })
                }
            })
        }
    },
    mounted() {
        // 如果email为空，则直接跳回首页
        if (this.$route?.query?.email) {
            // 设置email
            this.email = this.$route.query.email
            // this.sendResetCaptcha()
        } else {
            this.$message({
                type: 'error',
                showClose: true,
                message: 'Invalid operation!',
                duration: 800
            })
            this.$router.push('/us/password')
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

.btn-1 {
    margin-top: 40px;
    user-select: none;
    cursor: pointer;
    width: 321px;
    height: 62px;
    // .r-line-height(45);
    line-height: 45px;
    border-radius: 6px;



}
</style>
  