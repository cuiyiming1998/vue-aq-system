<template>
    <div class="container">
        <header-com :active="2"></header-com>
        <div class="main">
            <h1> {{projInfo.projectName}} 的调查结果</h1>
            <ul>
                <li v-for="(item,index) in questInfo" :key=index>
                    <h2>
                        {{item.title}}
                    </h2>
                    <chart :options="options[index]" :auto-resize="true"></chart>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headerCom from '../components/Header'
import axios from 'axios'
import echarts from 'echarts'
import 'echarts/lib/chart/bar'

export default {
    data(){
        return {
            projInfo: this.$route.query,
            questInfo: [],
            options: [], // echarts数据
        }
    },
    components:{
        headerCom
    },
    computed:{
        questions:function(){
            return this.questInfo
        }
    },
    methods:{
    },
    created(){
    },
    mounted(){
        let self = this;
        axios({
            method: 'get',
            url : '/getAnswer',
            params: {
                projectId: self.projInfo.projectId, // 问卷Id
            }
        }).then((res)=>{
            if(res.data.code == 1){
                let answer = res.data.answer;
                let questions = res.data.questInfo;
                for(let i=0;i<answer.length;i++){
                    for(let j=0;j<answer[i].length;j++){
                        answer[i][j].answer = JSON.parse(answer[i][j].answer);
                    }
                }
                self.questInfo = questions;
                return answer;
            }
        }).then((answer)=>{
            console.log(answer);
            console.log(answer[0])
            console.log(self.questInfo);
            let counts = []; //保存答案统计信息
            let questions = self.questInfo; // 问题信息
            // 初始化Echarts
            for(let i=0;i<questions.length;i++){
                if(questions[i].type == 'radio' || questions[i].type == 'checkbox'){
                console.log(answer[i])
                    let value = [];
                    for(let j=0;i<answer[i].length;j++){
                        // console.log(answer[i][j])
                        // value.push(answer[i][j].count);
                    }
                    console.log(value);
                    self.options.push({
                        xAxis: {
                            type: 'category',
                            data: questions[i].answers
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: value,
                            type: 'bar',
                            smooth: true
                        }]
                    })
                }
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .container{
        .main{
            width: 1000px;
            margin: 40px auto 0 auto;
            background-color: white;
            padding: 20px;
            h1{
                text-align: center;
                margin: 0;
            }
            ul li{
                list-style: none;
            }
        }
    }
</style>