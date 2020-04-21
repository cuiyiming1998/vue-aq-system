<template>
    <div>
        <header-com :active="4"></header-com>
        <h1>{{projInfo.projectName}}</h1>
    </div>
</template>

<script>
import headerCom from '../components/Header'

export default {
    data(){
        return {
            projInfo: this.$route.query, // 回答的问卷信息
        }
    },
    methods:{

    },
    components:{
        headerCom
    },
    beforeMount(){
        console.log(this.projInfo)
    }
}
</script>

<style lang="scss" scoped>

</style>