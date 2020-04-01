<template>
  <div class="home">
    <header-com></header-com>
  </div>
</template>

<script>
import store from '@/store'
import headerCom from '../components/Header'
import newProgect from '../components/NewProgect'
import projects from '../components/Projects'

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
    headerCom,
    newProgect,
    projects
  },
  beforeMount: function(){

  }
}
</script>

<style lang="scss" scoped>
  
</style>
