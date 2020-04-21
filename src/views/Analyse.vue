<template>
    <div>
        <header-com :active="2"></header-com>
        <h1> Analyse Page</h1>
    </div>
</template>

<script>
import headerCom from '../components/Header'

export default {
    data(){
        return {
            projInfo: this.$route.query
        }
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