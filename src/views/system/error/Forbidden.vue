<template>
    <div style="background:#f0f2f5;margin-top: -20px;height:100%;">
        <div class="wscn-http404">
            <div class="pic-404">
                <img
                    class="pic-403__parent"
                    src="https://s3.forcloudcdn.com/dmc/img/81f9a269/a8c47e66f796eecf3bedf36bec7634c9-260x260.png"
                    alt="403"
                />
            </div>
            <div class="exception">
                <div class="exception__headline exception__headline-status">403</div>
                <div class="exception__headline">抱歉，你没有权限放该页面</div>
                <el-button type="primary" @click="$router.replace({ path: '/' })">返回首页</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.wscn-http404 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 20px auto 60px;
    padding: 0 100px;
    overflow: hidden;
    .pic-404 {
        width: 400px;
        padding: 150px 0;
        overflow: hidden;
        &__parent {
            width: 300px;
        }
    }
    .exception {
        width: 300px;
        padding: 150px 0;
        overflow: hidden;
        &__oops {
            font-size: 32px;
            font-weight: bold;
            line-height: 40px;
            color: #1482f0;
            opacity: 0;
            margin-bottom: 20px;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
        }
        &__headline {
            font-size: 20px;
            line-height: 24px;
            color: #434e59;
            opacity: 0;
            margin-bottom: 20px;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-fill-mode: forwards;
        }
        &__headline-status {
            font-size: 30px;
        }
        &__info {
            font-size: 13px;
            line-height: 21px;
            color: grey;
            opacity: 0;
            margin-bottom: 30px;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 0.2s;
            animation-fill-mode: forwards;
        }
        &__return-home {
            display: block;
            float: left;
            width: 110px;
            height: 36px;
            background: #1482f0;
            border-radius: 100px;
            text-align: center;
            color: #ffffff;
            opacity: 0;
            font-size: 14px;
            line-height: 36px;
            cursor: pointer;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-fill-mode: forwards;
        }
        @keyframes slideUp {
            0% {
                transform: translateY(60px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
}
</style>
