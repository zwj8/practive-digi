<template>
    <div class="auth-wrapper">
        <div class="banner">
            <!-- 版心里面的头部标题 -->
            <header class="auth-title">
                <div class="logo-wrapper flex-row">
                    <img class="logo-image" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psillxqg2a6zqfsfd3jz053v4liqb89kkgw71fe2237-0f9f-407d-b9ca-926b09ca6d37" />
                </div>
                <p class="smalltitlt-span">Good&nbsp;choice.</p>
            </header>
            <el-card>
                <!-- 邮箱密码登录/注册 -->
                <el-form label-position="left" ref="loginForm" :model="loginForm" :rules="loginRules">
                    <el-form-item prop="loginKey" class="email">
                        <i class="el-icon-message"></i>
                        <el-input v-model="loginForm.loginKey" placeholder="Business email" icon="el-icon-message">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="secret">
                        <el-input type="password" v-model="loginForm.secret" placeholder="Password"
                            @keyup.enter.native="Login">
                        </el-input>
                    </el-form-item>
                    <el-form-item>

                        <div class="fotget">
                            <p class="kaoyou" @click="$router.push('/password')">Forgot password</p>
                        </div>
                        <i class=" el-icon-unlock"></i>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" type="primary" style="width: 321px; height: 62px;"
                            class="el-button--primary ">
                            <span style="font-size:25px;" @click="Login">SIGN UP</span>
                        </el-button>
                    </el-form-item>
                </el-form>

                <!-- 同意协议部分 -->
                <div class="footer-action">
                    <div class="footer-action__agreement">
                        <span class="gray">By registering, you have read and agreed</span>
                        &nbsp;
                        <span class="text-primary pointer" @click.stop="handlePolicy('service')">terms &
                            conditions</span>
                        &nbsp;
                        <span class="gray">and</span>
                        &nbsp;
                        <span class="text-primary pointer" @click.stop="handlePolicy('privacy')">privacy policy</span>
                    </div>
                </div>
            </el-card>
            <!-- 底部商业logo标志 -->
            <BusinessTitle></BusinessTitle>
            <!-- 各类协议弹窗 -->
            <PratAgreement :show="policyShow" :type="policyType" @close="closePolicy"></PratAgreement>
        </div>

    </div>
</template>
<script>
import AUTH_API from '@/api/auth'
import PratAgreement from '@/components/part/PratAgreement'
import BusinessTitle from '@/components/northcommon/BusinessTitle.vue'
export default {
    components: { BusinessTitle, PratAgreement },
    data() {
        return {
            //登录表单
            loginForm: {
                loginKey: '',
                secret: ''
            },
            //验证表单
            loginRules: {
                loginKey: [{ required: true, trigger: 'blur', message: '邮箱不能为空' },],
                secret: [
                    { required: true, trigger: 'blur', message: '密码不能为空' },
                    { min: 6, max: 16, message: '密码的长度在6-16位之间 ', trigger: 'blur' }
                ]
            },
            //控制各类协议显示还是隐藏
            policyShow: false,
            //控制显示模式时显示的是哪一个协议
            policyType: null,
            loading: false
        }
    },
    methods: {
        Login() {
            this.$refs.loginForm.validate(async (valid) => {
                if (!valid) return
                this.loading = true
                try {
                    const res = await AUTH_API.LoginAndSign(this.loginForm)
                    console.log('LoginAndSign', res)
                    //如果没注册
                    if (!res.value.isLogin) {
                        this.$message.warning(res.value.errorTips)
                        this.$router.push('/detailpage')
                    } else {
                        //已注册
                        this.$message.success(res.value.welcomeTitle)
                        this.$router.push('/homepage')

                    }

                } catch (err) {
                    console.log('LoginAndSign', err)
                }

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
.auth-wrapper {
    position: relative;
    padding-top: 154px;
    padding-bottom: 250px;
    text-align: center;

    .banner {
        position: absolute;
        left: 50%;
        margin-left: -310px;
        width: 660px;



        // 标题
        .auth-title {
            margin-bottom: 50px;

            .smalltitlt-span {
                color: #282828;
                font-size: 24px;
                font-family: PingFangSC-Medium;
                font-weight: 700;
                margin-bottom: 60px;
            }

        }

        .fotget {
            cursor: pointer;
            position: relative;
            width: 578px;

            .kaoyou {
                position: absolute;
                margin-left: 77%;
                margin-top: -25px;
                text-decoration: underline;
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 400;
            }
        }


    }

    // 容器
    .auth-container {
        height: 600px;
        width: 500px;
        padding: 10px;
        box-sizing: border-box;
        // position: relative;
        text-align: center;






        /deep/.el-input__inner {
            height: 50px;
            width: 540px;
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
            color: #AAAAB0;
            line-height: 60px;
        }

    }
}

/deep/.el-button {
    background-color: #1436F5
}

/deep/.el-card__body {
    padding: 30px;
}

/deep/.el-input__inner {
    border-radius: 4px;
    border: 1px solid #fff;
    border-bottom: 1px solid #D7D7D7;
    color: #606266;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
}
</style>
