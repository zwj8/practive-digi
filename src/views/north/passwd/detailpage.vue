<template>
    <div class="banner">
        <div class="all">
            <div class="left">
                <div class="logo-wrapper flex-row">
                    <img class="logo-image" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psillxqg2a6zqfsfd3jz053v4liqb89kkgw71fe2237-0f9f-407d-b9ca-926b09ca6d37" />
                </div>
                <h2 class="title_h2">
                    Sign up for a demo today
                </h2>
                <div class="sentence">
                    <h3> Discover how our DigiAds platform can help you </h3>
                    <h3>increase engagementand conversion with a no obligation, </h3>
                    <h3>live platform demonstration </h3>
                </div>
                <h2 class="title_h2">
                    Our experts will:
                </h2>
                <div class="sentence">
                    <h3>Discuss your use cases and business needs </h3>
                    <h3>Give a hands-on demonstration </h3>
                    <h3>Show how you can take your TikTok business </h3>
                    <h3>to the next level. </h3>
                </div>
                <p class="text_3">
                    TRUSTED&nbsp;BY&nbsp;THOUSANDS&nbsp;OF&nbsp;THE&nbsp;WORLD’S&nbsp;BIGGEST&nbsp;BRANDS
                </p>
                <img class="bisniss" referrerpolicy="no-referrer"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/psrx2ysu3i46fs5ifcv6nn059c14ew3jgmca79f7c7-60f7-4468-86d9-dd3e5e693593" />
            </div>

            <div class="right">
                <!-- 右上角小文字 -->
                <div class="rigthtext">
                    <span class="redd">*</span>
                    <span class="small-text"> Indicates a required field</span>
                </div>
                <el-form ref="form" :model="signform" :rules="rulesForm" label-width="80px">
                    <!-- 名字 -->
                    <el-form-item label=" " prop="">
                        <span class="demonstration">
                            First Name<span class="redd">*</span>
                        </span>
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <!-- 姓 -->
                    <el-form-item label=" " prop="">
                        <span class="demonstration">
                            Last Name<span class="redd">*</span>
                        </span>
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <!-- 邮箱地址 -->
                    <el-form-item label=" " prop="loginKey">
                        <span class="demonstration">
                            Email Address<span class="redd">*</span>
                        </span>
                        <el-input v-model="form.loginKey"></el-input>
                    </el-form-item>
                    <!-- 点发送邮件 -->
                    <el-form-item label=" " prop="captcha">
                        <el-input v-model="form.captcha" placeholder="Enter verification code"
                            class="codeinput"></el-input>
                        <span class="send">Send verification code</span>
                    </el-form-item>
                    <!-- 公司 -->
                    <el-form-item label=" " prop="">
                        <span class="demonstration">
                            Company<span class="redd">*</span>
                        </span>
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <!-- 工作职称 -->
                    <el-form-item label=" " prop="">
                        <span class="demonstration">
                            Job Title
                        </span>
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <!-- 国家 -->
                    <el-form-item label=" " prop="">
                        <span class="demonstration">
                            Country<span class="redd">*</span>
                        </span>
                        <el-select v-model="form.region">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 行业 -->
                    <el-form-item label=" " prop="">
                        <span class="demonstration">
                            Industry<span class="redd">*</span>
                        </span>
                        <el-select v-model="form.region">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 电话号码 -->
                    <el-form-item label=" " prop="phone">
                        <span class="demonstration">
                            Phone Number
                        </span>
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <!-- 你觉得哪一个更适合你?? -->
                    <el-form-item label=" " prop="">
                        <span class="demonstration">
                            Which best matches what you're looking for?<span class="redd">*</span>
                        </span>
                        <el-select v-model="form.region">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 点击注册 -->
                    <el-form-item class="btn">
                        <el-button :loading="loading" type="primary" style="width: 321px; height: 62px; margin: 0 auto;"
                            class="el-button--primary ">
                            <span style="font-size:25px;" @click="Login">SIGN UP FREE</span>
                        </el-button>
                    </el-form-item>
                    <!-- 隐私条款 -->
                    <el-form-item label=" " prop="" class="footer">
                        <el-checkbox-group v-model="form">
                            <el-checkbox label=" " prop="" class=".el-checkbox__inner"></el-checkbox>
                            <span class="privacy">By submitting this form you agree to DigiAds's </span>
                            <span class="blue">user privacy statement.</span>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import AUTH_API from '@/api/auth'
export default {
    data() {
        return {
            loading: false,
            signform: {
                phone: '',
                loginKey: '',
                captcha: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        Login() {
            this.$refs.form.validate(async (valid) => {
                if (!valid) return
                this.loading = true
                const res = await AUTH_API.LoginAndSign(this.signform)
                console.log(res);
                this.$message.success('')
            })
        }
    }
}
</script>
<style lang='less'  scoped>
.banner {
    .all {
        margin: 55px 270px 55px 290px;
        display: flex;
    }

    .left {
        padding: 95px 0 0 0;
        width: 650px;

        .logo-wrapper {
            margin-bottom: 80px;
        }

        .text_3 {
            width: 516px;
            height: 15px;
            overflow-wrap: break-word;
            color: rgba(170, 170, 176, 1);
            font-size: 16px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            white-space: nowrap;
            line-height: 60px;
        }

        .bisniss {
            // width: 423px;
            // height: 159px;
            margin-top: 12px;
        }

        .title_h2 {
            font-size: 36px;
            font-weight: 700px;
            color: #282828;
            margin: 0;
        }

        .sentence {
            line-height: 25px;
            margin-bottom: 70px;

            h3 {
                font-size: 22px;
                font-family: PingFangSC-Regular;
                font-weight: 540;
                margin: 18px 0 0 0;
                width: 620px;
            }
        }
    }

    .right {
        width: 600px;
        padding: 25px 25px 30px 50px;
        box-shadow: 2px 3px 16px 0px rgba(0, 0, 0, 0.16);
        border-radius: 10px;
        margin-left: 90px;

        .btn {
            text-align: center;
        }

        .codeinput {
            position: relative;
        }

        .send {
            cursor: pointer;
            position: absolute;
            left: 340px;
            top: 0;
            width: 210px;
            height: 58px;
            background: #1030F3;
            line-height: 58px;
            opacity: 0.7;
            border-radius: 6px;
            color: #fff;
            font-size: 18px;
            text-align: center;
        }





        /deep/.el-form-item__content {
            margin-left: 0px !important;
            line-height: 20px;
        }


        .footer {
            font-family: PingFang SC;

            /deep/ .el-checkbox__inner {
                display: inline-block;
                border-radius: 7px;
                box-sizing: border-box;
                width: 14px;
                height: 14px;
                border: 1px solid rgba(20, 54, 245, 1);

            }

            .privacy {
                font-size: 15px;
                color: #AAAAB0;
            }

            .blue {
                cursor: pointer;
                font-size: 15px;
                color: #1436F5;
            }
        }

        /deep/.el-button--primary {
            margin-top: 10px;
            background-color: #1436F5;
            // margin: 0 140px;
        }

        .redd {
            color: red;
        }

        .rigthtext {
            font-size: 13px;
            // margin-right: 0px;
            text-align: end;
        }
    }
}

/deep/ .el-input__inner {
    box-shadow: 0.5px 0.5px 3px 1.5px rgba(0, 0, 0, 0.16) inset;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    color: #606266;
    display: inline-block;
    height: 58px;

    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 550px;
    padding: 0 35px 0 20px;
    line-height: 58px;
}

/deep/.el-icon-arrow-up:before {
    content: "\e6e1";
    font-weight: 600;
    color: #282828;
}
</style>