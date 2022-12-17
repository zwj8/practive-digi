<template>
    <div>
        <h1>正在激活账号中,请稍后...</h1>
    </div>
</template>
<script>
import AUTH from '@/api/auth';
export default {
    name: '',
    data() {
        return {
            params: {}
        }
    },
    created() {
        this.getParams()

    },
    computed: {
    },
    methods: {
        //获取URL传过来的参数
        getParams() {
            this.params = this.$route.params
            console.log(this.$route.params);
            this.getActive()
        },
        //获取链接携带的参数传给后端
        async getActive() {
            try {
                const res = await AUTH.activatAccount(this.params)
                console.log('链接携带的参数传给后端成功', res)
                // 保存数据
            } catch (err) {
                console.log('链接携带的参数传给后端失败', err)
            }
        },
        // async getActive() {
        //     const res = await AUTH.activatAccount(this.params)
        // }
    }
}
</script>
<style lang='less'  scoped>

</style>