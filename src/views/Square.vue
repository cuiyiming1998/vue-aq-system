<template>
    <div class="main">
        <header-com :active="4"></header-com>
        <h1> 问卷广场 </h1>
        <ul>
            <li v-for="(item,index) in projects" :key=index>
                <h1>
                    {{item.projectName}}
                </h1>
                <h2>
                    {{item.username}}
                </h2>
                <h2>
                    {{item.time}}
                </h2>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import headerCom from '../components/Header'

export default {
    data(){
        return {
            projects:[]
        }
    },
    methods:{

    },
    components:{
        headerCom
    },
    beforeMount(){
        const self = this;
        axios({
            method: 'get',
            url: '/square',
        }).then((res)=>{
            self.projects = res.data;
        })
    }
}
</script>

<style lang="scss" scoped>

</style>