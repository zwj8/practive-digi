<template>
    <div class="banner">
        <div class="all">
            <div class="left">
                <div class="logo-wrapper flex-row">
                    <img class="logo-image" referrerpolicy="no-referrer"
                        :src="`${OSS_PREFIX}/default/digiads_logo.png`" />
                </div>
                <h2 class="title_h2">Sign up for a demo today</h2>
                <div class="sentence">
                    <h3>Discover how our DigiAds platform can help you</h3>
                    <h3>increase engagementand conversion with a no obligation,</h3>
                    <h3>live platform demonstration</h3>
                </div>
                <h2 class="title_h2">Our experts will:</h2>
                <div class="sentence">
                    <h3>Discuss your use cases and business needs</h3>
                    <h3>Give a hands-on demonstration</h3>
                    <h3>Show how you can take your TikTok business</h3>
                    <h3>to the next level.</h3>
                </div>
            </div>

            <div class="right">
                <!-- 右上角小文字 -->
                <div class="rigthtext">
                    <span class="redd">*</span>
                    <span class="small-text"> Indicates a required field</span>
                </div>
                <el-form ref="form" :model="signform" :rules="rulesForm" label-position="left">
                    <!-- 名字 -->
                    <el-form-item prop="firstName">
                        <span class="demonstration">
                            First Name<span class="redd">*</span>
                        </span>
                        <el-input v-model="signform.firstName"></el-input>
                    </el-form-item>
                    <!-- 姓 -->
                    <el-form-item prop="lastName">
                        <span class="demonstration">
                            Last Name<span class="redd">*</span>
                        </span>
                        <el-input v-model="signform.lastName"></el-input>
                    </el-form-item>
                    <!-- 邮箱地址 -->
                    <el-form-item prop="loginKey">
                        <span class="demonstration">
                            Email Address<span class="redd">*</span>
                        </span>
                        <el-input v-model="signform.loginKey"></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item prop="secret">
                        <span class="demonstration">
                            Password<span class="redd">*</span>
                        </span>
                        <el-input v-model="signform.secret" show-password></el-input>
                    </el-form-item>
                    <!-- 公司 -->
                    <el-form-item prop="company">
                        <span class="demonstration">
                            Company<span class="redd">*</span>
                        </span>
                        <el-input v-model="signform.company"></el-input>
                    </el-form-item>
                    <!-- 工作职称 -->
                    <el-form-item prop="jobTitle">
                        <span class="demonstration"> Job Title </span>
                        <el-input v-model="signform.jobTitle"></el-input>
                    </el-form-item>
                    <!-- 国家 -->
                    <el-form-item prop="country">
                        <span class="demonstration">
                            Country<span class="redd">*</span>
                        </span>
                        <el-select class="sign-select" v-model="signform.country" @change="changeAddr()"
                            placeholder="please select">
                            <el-option v-for="item in areaCodeOptions" :key="item.abbr" :label="item.abbr"
                                :value="item.abbr"></el-option>
                        </el-select>
                    </el-form-item>

                    <!-- //手机号 -->
                    <el-form-item prop="Phone">
                        <span class="demonstration"> Phone Number </span>
                        <el-input v-model="signform.phone">
                            <com-area-code lang="en" disabeld :countryCode="countryCode" slot="prepend"
                                @change="handleAreaCodeChange" />
                        </el-input>
                    </el-form-item>
                    <!-- 行业 -->
                    <el-form-item prop="industry">
                        <span class="demonstration">
                            Industry<span class="redd">*</span>
                        </span>
                        <el-select class="sign-select" v-model="signform.industry" placeholder="">
                            <el-option v-for="_io in industryOpts" :key="_io.value" :label="_io.label"
                                :value="_io.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 你觉得哪一个更适合你?? -->
                    <el-form-item prop="lookingFor">
                        <span class="demonstration">
                            Which best matches what you're looking for?
                            <span class="redd">*</span>
                        </span>
                        <el-select class="sign-select" v-model="signform.lookingFor" placeholder="">
                            <el-option v-for="_m in matchesOpts" :key="_m.value" :label="_m.label"
                                :value="_m.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 点击注册 -->
                    <el-form-item>
                        <!-- <el-button :loading="loading" type="primary" style="width: 321px; height: 62px; margin: 0 auto"
                            class="el-button--primary">
                            <span style="font-size: 25px" @click="signup">SIGN UP FREE</span>
                        </el-button> -->
                        <com-btn class="btn btn-1" :loading="loading" type="bg-primary" style="font-size: 25px"
                            @click="signup">SIGN UP
                            FREE</com-btn>
                    </el-form-item>
                    <!-- 隐私条款 -->
                    <el-form-item prop="privacy" class="footer">
                        <el-checkbox-group v-model="signform.privacy">
                            <el-checkbox name="type"></el-checkbox>
                            <span class="privacy">By submitting this form you agree to DigiAds's
                            </span>
                            <span class="blue" @click="privacy('privacy')">
                                user privacy statement.</span>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <PratAgreement :show="policyShow" :type="policyType"> </PratAgreement>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AUTH_API from '@/api/auth'
import PratAgreement from '@/components/northcommon/part/PratAgreement'
import { INDUSTRY, BEST_MATCHES } from '@/constants/config'
export default {
    name: 'RegisterDetail',
    components: { PratAgreement },
    data() {
        return {
            //父传子国家和区号
            countryCode: [],
            //本地国家数据
            // localRegion: [],
            // 协议的弹框显示隐藏
            policyShow: false,
            //控制显示模式时显示的是哪一个协议
            policyType: null,

            loading: false,
            //表单信息
            signform: {
                loginKey: '',
                secret: '',
                phone: '',
                areaCode: '',
                // appKey: '',
                firstName: '',
                lastName: '',
                company: '',
                jobTitle: '',
                country: '',
                industry: '',
                lookingFor: '',
                privacy: true,

            },
            //校验
            rulesForm: {
                firstName: [
                    { required: true, message: 'Please enter your name!', trigger: 'blur' },
                ],
                lastName: [
                    { required: true, message: 'Please enter your last name!', trigger: 'blur' }
                ],
                loginKey: [
                    { required: true, message: 'Please enter your email address!', trigger: 'blur' },
                    { type: 'email', message: 'Please enter the correct email format!', trigger: ['blur', 'change'] }
                ],
                secret: [
                    { required: true, message: 'Please enter your email password!', trigger: 'blur' },
                    { min: 6, message: 'Please enter the correct password format!', trigger: 'blur' }
                ],
                company: [
                    { required: true, message: 'Please enter your company name!', trigger: 'blur' }
                ],
                jobTitle: [
                    // { required: true, trigger: 'blur', message: 'Please enter your job title!' },
                ],
                country: [
                    { required: true, message: 'Please choose your country!', trigger: 'change' }
                ],
                industry: [
                    { required: true, trigger: 'change', message: 'Please choose your industry!' },
                ],
                // phone: [
                //     { required: true, message: 'Please enter the correct phone number format!', trigger: 'blur' },
                //     { type: 'number', message: 'Please enter the correct phone number format!', trigger: 'blur' }
                // ],
                lookingFor: [
                    { required: true, message: 'Please choose a theme that suits you!', trigger: 'change' }
                ],
                privacy: [
                    { required: true, trigger: 'blur', message: 'Please check the Registration protocol!' }
                ],
            }
        }
    },
    created() {
        this.$store.dispatch('global/config/checkRegion')
        //获取本地存储渲染国家列表
        // const localRegion = JSON.parse(localStorage.getItem('areaCode')).data
        // this.localRegion = localRegion
        // console.log(localRegion);
        //自动填充邮箱密码
        this.initial()
    },
    computed: {
        ...mapGetters('global/config', ['areaCodeOptions']),
        industryOpts() {
            return INDUSTRY
        },
        matchesOpts() {
            return BEST_MATCHES
        }

    },
    methods: {
        //国家手机号联动
        changeAddr() {
            const country = this.signform.country
            //根据国家的值从数据中筛选item.abbr === 当前国家的值的这一项,匹配到后筛选出来返回这个对象
            this.countryCode = this.areaCodeOptions.filter(item => {
                return item.abbr === country
            })
            //传给子组件
            // console.log(this.countryCode);

        },
        //区号选择
        handleAreaCodeChange(item) {
            this.signform.areaCode = item.code
        },
        // 初始化
        initial() {
            const _query = this.$route.query
            if (_query?.email) this.signform.loginKey = _query.email
            if (_query?.secret) this.signform.secret = window.atob(_query.secret)
        },
        onSubmit() {
            console.log('submit!');
        },
        //点击显示
        privacy(type) {
            this.policyShow = true
            this.policyType = type
        },
        //点击注册
        signup() {
            this.$refs.form.validate(async (valid) => {
                if (!valid) return this.$message.error('fail to register')
                const params = {
                    loginKey: this.signform.loginKey,
                    secret: this.signform.secret,
                    phone: this.signform.phone,
                    region: this.signform.country,
                    areaCode: this.signform.areaCode,
                    // appKey: this.signform.appKey,
                    northAmericaProfile: {
                        firstName: this.signform.firstName,
                        lastName: this.signform.lastName,
                        company: this.signform.company,
                        jobTitle: this.signform.jobTitle,
                        industry: this.signform.industry,
                        lookingFor: this.signform.lookingFor
                    }
                }
                try {
                    this.loading = true
                    const res = await AUTH_API.NorthSign(params)
                    console.log('注册发送请求成功', res);
                    this.loading = false
                    //如果注册失败
                    if (!res.value.isLogin) return this.$message.error(res.errorMsg)
                    //如果注册成功,发送邮件  则提示用户去邮箱激活
                    this.$message.success('Registration succeeded, activation email has been sent, please go to the email to activate!')
                    //跳转到待激活页面
                    this.$router.push(`/us/wait-active?email=${this.signform.loginKey}`)


                } catch (err) {
                    console.log('注册发送请求错误响应', err)
                    this.loading = false
                    this.$message.warning(err.errorMsg)
                }

            })
        }
    }
}

</script>
<style lang='less' scoped>
.banner {
    background-image: url('@{oss_prefix}/default/us_bg_adorn.png');
    background-repeat: no-repeat;
    background-position: left 0px bottom 0px;
    display: flex;
    justify-content: center;

    .all {
        margin: 55px 270px 55px 290px;
        display: flex;
    }

    .left {
        padding: 95px 0 0 0;
        width: 650px;

        .logo-wrapper {
            margin-bottom: 60px;
        }

        .logo-image {
            width: 300px;
            height: 80px;
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

        .footer {
            font-family: PingFang SC;

            .privacy {
                font-size: 15px;
                color: #aaaab0;
            }

            .blue {
                cursor: pointer;
                font-size: 15px;
                color: #1436f5;
            }
        }

        .rigthtext {
            font-size: 13px;
            text-align: end;
        }
    }
}

/deep/.el-checkbox__inner {
    //     display: inline-block;
    border-radius: 26px;
    //     box-sizing: border-box;
    //     width: 14px;
    //     height: 14px;
    //     border: 1px solid rgba(20, 54, 245, 1);
    margin-right: 10px;
}

/deep/.el-button--primary {
    margin-top: 10px;
    background-color: #1436f5;
    // margin: 0 140px;
}

/deep/.el-form-item__content {
    margin-left: 0px !important;
    line-height: 20px;

}

/deep/.el-icon-arrow-up:before {
    content: '\e6e1';
    font-weight: 600;
    color: #282828;
}

.redd {
    color: @color-status-error;
}

/deep/ .sign-select {
    width: 100%;
}

/deep/.el-input--suffix .el-input__inner {
    padding-right: 25px;
}


.btn-1 {
    // margin-top: 40px;
    user-select: none;
    cursor: pointer;
    width: 321px;
    height: 62px;
    margin-left: 130px;
    // .r-line-height(45);
    line-height: 45px;
    border-radius: 6px !important;
}
</style>