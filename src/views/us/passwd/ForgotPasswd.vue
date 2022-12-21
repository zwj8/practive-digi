<template>
    <div class="auth-wrapper">
        <!-- 大版心 -->
        <div class="auth-container">
            <!-- 版心里面的头部标题 -->
            <header class="auth-title">
                <div class="logo-wrapper flex-row">
                    <img class="logo-image" referrerpolicy="no-referrer"
                        :src="`${OSS_PREFIX}/default/digiads_logo.png`" />
                </div>
                <p class="smalltitlt-span">Password Reset</p>
                <div class="text-wrapper_1 flex-row">
                    <p class="paragraph_1">
                        Enter&nbsp;your&nbsp;
                        email&nbsp;address,&nbsp;
                        and&nbsp;we&nbsp;will&nbsp;
                        send&nbsp;you&nbsp;an&nbsp;
                        email&nbsp;containing&nbsp;
                        a&nbsp;
                    </p>
                    <p class="paragraph_1">
                        verification&nbsp;
                        code&nbsp;to&nbsp;reset&nbsp;
                        your&nbsp;account&nbsp;password.
                    </p>
                </div>
            </header>
            <div class="card">
                <el-card>
                    <!-- 输入邮箱 -->
                    <el-form label-position="left" ref="regisForm" :model="regisForm" :rules="regisRules">
                        <el-form-item prop="email">
                            <el-input placeholder="Business email" v-model="regisForm.email"
                                prefix-icon="el-icon-message">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <!-- <el-button :loading="loading" type="primary" style="width: 321px; height: 62px;"
                                class="el-button--primary ">
                                <span style="font-size:25px;" @click="Login">Send Mail</span>
                            </el-button> -->
                            <com-btn type="bg-primary" :loading="loading" style="font-size: 28px;" @click.native="Login"
                                class="btn-1">Send
                                Mail</com-btn>
                        </el-form-item>
                    </el-form>
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
            loading: false,
            regisForm: {
                email: ''
            },
            regisRules: {
                email: [
                    { required: true, trigger: 'blur', message: 'Mailbox account cannot be empty!' },
                    { type: 'email', message: 'Mailbox account cannot be empty!', trigger: ['blur', 'change'] }
                ],

            }
        }

    },
    created() {
    },
    computed: {
    },
    methods: {
        Login() {
            this.loading = true
            this.$refs.regisForm.validate(async (valid) => {
                if (!valid) return
                try {
                    const res = await AUTH_API.SendEmail(this.regisForm)
                    this.loading = false
                    console.log('发送邮箱请求', res)
                    //发送邮箱请求失败
                    if (!res.success && res.value === null) return this.$message.warning(res.errorMsg)
                    //发送邮箱请求成功,跳转到重置密码
                    this.$router.push({
                        name: 'usReset', query: {
                            email: this.regisForm.email
                        }
                    })

                } catch (err) {
                    console.log('错误的', err)
                    this.loading = false
                    this.$message.warning(err.errorMsg)
                }

                // AUTH_API.SendEmail(this.regisForm).then(res => {
                //     console.log('success', res)
                // }).catch(e => {
                //     console.log('error', e)
                // }).finally(() => {
                //     this.loading = false
                // })
                //邮箱账号不存在


            })
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
            // text-align: center;
            width: 640px;
            left: 50%;
            margin-left: -320px;


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

            .text-wrapper_1 {
                opacity: 1;
                text-align: center;
            }

            .paragraph_1 {
                // width: 788px;
                // height: 60px;
                overflow-wrap: break-word;
                color: rgba(40, 40, 40, 1);
                font-size: 24px;
                font-family: PingFangSC-Medium;
                font-weight: 700;
                line-height: 36px;
                // margin-left: -500px;
            }

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

.btn-1 {
    margin-top: 40px;
    user-select: none;
    cursor: pointer;
    // border-color: #fff;
    // color: #fff;
    // .r-font-size(25);

    // .p2r(width, 321);
    width: 321px;
    // .r-height(62);
    height: 62px;
    // .r-line-height(45);
    line-height: 45px;
    // background: #1436F5;
    border-radius: 6px !important;
    // .r-border-radius(6);
}
</style>
