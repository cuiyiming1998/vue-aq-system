<template>
    <div class="main">
        <header-com :active="3"></header-com>
        <div class="wrap">
            <table>
                <thead>
                    <tr>问卷名</tr>
                    <tr>删除时间</tr>
                    <tr>操作</tr>
                </thead>
                <tbody v-for="(item,index) in delProjects" :key=index>
                    <tr class="name">{{ item.name }}</tr>
                    <tr class="time">{{ item.time }}</tr>
                    <tr>
                        <el-button type="primary" plain @click="resume(item,index)">恢复</el-button>
                        <el-button type="danger" plain @click="remove(item,index)">删除</el-button>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import headerCom from '../components/Header'
import store from '@/store'
import { mapState } from 'vuex'

export default {
    data(){
        return {

        }
    },
    computed: mapState([
        'delProjects'
    ]),
    methods:{
        // 恢复
        resume(item,index){
            this.$store.commit('updateProjects',{
                value: item.name,
            });
            this.$store.commit('resume',index);
            this.$message({
                message: '恢复成功！您可以在您的项目列表中查看',
                type: 'success'
            })
        },
        // 彻底删除
        remove(item,index){
            this.$confirm('此操作将不可恢复，确定删除吗？','提示',{
                confirmButtonText: '是',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                this.$store.commit('remove',{
                    name: item.name,
                    index: index
                })
                this.$message({
                    message: '删除成功！',
                    type: 'success'
                })
            }).catch(()=>{
                
            })
        }
    },
    components:{
        headerCom,
    }
}
</script>

<style lang="scss" scoped>
    .main{
        width: 100vw;
        text-align: center;
        .wrap{
            width: 80%;
            margin: 20px auto;
            table{
                width: 100%;
                display: flex;
                flex-direction: column;
                border-spacing: 2px;
                border-color: grey;
                thead{
                    display: flex;
                    height: 50px;
                    line-height: 50px;
                    tr{
                        flex: 1;
                    }
                }
                tbody{
                    display: flex;
                    .name{
                        flex: 1;
                        color: #018FE5;
                        text-decoration: underline;
                        font-size: 1.2rem;
                        cursor: default;
                    }
                    tr{
                        flex: 1;
                        height: 50px;
                        line-height: 50px;
                        display: table-cell;
                    }
                }
            }
        }
    }
</style>