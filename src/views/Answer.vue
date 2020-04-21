<template>
    <div>
        <header-com :active="4"></header-com>
        <h1>{{projInfo.projectName}}</h1>
        <ul>
            <li v-for="(item,index) in questions" :key=index>
                <h1>{{item.title}}</h1>
                <div v-for="(i,k) in item.answers" :key=k>
                    {{i}}
                </div>
                <textarea name="textAns" id="textQuest" cols="20" rows="5" v-if="item.answers == null"></textarea>
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
            projInfo: this.$route.query, // 回答的问卷信息
            questions: [], // 问题信息
        }
    },
    methods:{

    },
    components:{
        headerCom
    },
    beforeMount(){
        let self = this;
        axios({
            method: 'get',
            url: '/getProject',
            params:{
                username: self.projInfo.username,
                projectName: self.projInfo.projectName
            }
        }).then((res)=>{
            self.questions = res.data.questions;
            console.log(self.questions);
        })
    }
}
</script>

<style lang="scss" scoped>

</style>