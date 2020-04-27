<template>
  <div class="home">
      <header-com :active="1"></header-com>
      <new-project v-if="isSaved == false"></new-project>
      <projects v-else></projects>
      <footer-com></footer-com>
  </div>
</template>

<script>
import store from '@/store'
import headerCom from '../components/Header'
import newProject from '../components/NewProject'
import projects from '../components/Projects'
import footerCom from '../components/footerCom.vue'

export default {
  store,
  name: 'Home',
  data(){
    return {
      isSaved: false,
    }
  },
  methods: {
  },
  components:{
    headerCom,
    newProject,
    projects,
    footerCom
  },
  beforeMount: function(){
    this.$store.commit('fresh');
    if(this.$store.state.projects.length > 0){
      this.isSaved = true
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
