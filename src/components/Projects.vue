<template>
    <el-main>
        <div class="container">
            <div class="projects">
                <i class="el-icon-folder-add"></i>
                <h2>创建新项目</h2>
            </div>
            <div class="projects" v-for="(item,index) in projects" :key = index>
                {{ item }}
            </div>
        </div>
    </el-main>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'

export default {
    data:()=>{
        return{

        }
    },
    computed: mapState([
        'projects'
    ]),
    beforeMount(){
        console.log(this.projects)
    }
}
</script>

<style lang="scss" scoped>
    .el-main{
        width: 100%;
        padding: 2%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .container{
            width: 80%;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
            .projects{
                width:21%;
                height: 200px;
                margin: 2%;
                border: 1px solid black;
                box-sizing: border-box;
                border-radius: 6px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .el-icon-folder-add{
                    font-size: 4em;
                }
            }
        }
    }
</style>