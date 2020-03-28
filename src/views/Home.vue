<template>
  <div class="home">
    <header-com></header-com>
  </div>
</template>

<script>
import store from '@/store'
import headerCom from '../components/Header'

export default {
  store,
  name: 'Home',
  data(){
    return {
    }
  },
  methods: {
    },
  components:{
    headerCom
  }
}
</script>

<style lang="scss" scoped>
  
</style>
