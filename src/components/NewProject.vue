<template>
    <el-main>
        <el-button class="add-file" @click="newProj">
            <div>
                <i class="el-icon-folder-add"></i>
            </div>
            <div>
                <h2>您还没有创建的项目</h2>
            </div>
            <div>
                <h3>点击创建</h3>
            </div>
        </el-button>
    </el-main>
</template>

<script>
export default {
    data:()=>{
        return{

        }
    },
    methods:{
        newProj:function(){
            this.$router.push({path: '/edit'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-main{
        height: calc(100vh - 71px - 160px);
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .add-file{
            width: 300px;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 10px;
        }
        .add-file:hover{
            box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
        }
    }
    .el-icon-folder-add{
        font-size: 100px;
    }
</style>