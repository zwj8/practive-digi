<template>
    <div class="auth-wrapper">
        <!-- 大版心 -->
        <div class="auth-container">
            <!-- 版心里面的头部标题 -->
            <header class="auth-title">
                <div class="logo-wrapper flex-row">
                    <img class="logo-image" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psillxqg2a6zqfsfd3jz053v4liqb89kkgw71fe2237-0f9f-407d-b9ca-926b09ca6d37" />
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
                    <!-- 邮箱密码登录/注册 -->
                    <el-form label-position="left">
                        <el-form-item>
                            <i class="el-icon-message"></i>
                            <el-input placeholder="Business email">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button :loading="loading" type="primary" style="width: 321px; height: 62px;"
                                class="el-button--primary ">
                                <span style="font-size:25px;" @click="Login">Send Mail</span>
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    created() {
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
p {
    margin: 0;
    z-index: 10;
}

.auth-wrapper {
    padding-top: 154px;
    display: flex;
    flex-flow: column;

    align-items: center;
    padding-bottom: 250px;
    text-align: center;


    // 容器
    .auth-container {
        justify-content: center;
        align-items: center;
        // height: 600px;
        // width: 620px;
        padding: 10px;
        box-sizing: border-box;
        position: relative;
        text-align: center;

        .card {
            // text-align: center;
            width: 640px;
            margin-left: 120px;

            .el-input__inner {
                border-color: #fff;
                // width: 540px;

            }
        }


        // 标题
        .auth-title {
            .text-center;
            margin-bottom: 50px;
            text-align: center;

            .text-wrapper_1 {
                // margin-left: -150px;
                // width: 540px;
                // height: 60px;
                // margin: 14px 0 0 567px;
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

/deep/.el-input__inner {
    border-radius: 4px;
    border: 1px solid #fff;
    border-bottom: 1px solid #D7D7D7;
    color: #606266;
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    // width: 100%;
}
</style>
