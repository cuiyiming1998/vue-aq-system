<template>
    <el-form class="login-container" ref="form" label-position="top" :model="form" :rules="rules" label-width="80px">
        <h1 class="login-title">注册</h1>
        <!-- 通过prop属性设置需要验证的值 -->
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="确认您的密码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        <div class="btns">
                <el-button type="primary" @click="Signup">注册</el-button>
        </div>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
            name: '',
            password: '',
            email:'',
            },
            rules: {
                // 对name进行验证
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
                ],
                // 对password进行验证
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods:{
        Signup: function(){
            this.$parent.isSignin = !this.$parent.isSignin;
        }
    },
}
</script>

<style lang="scss" scoped>
    .login-container{
        width: 70%;
        position: relative;
    }
    .login-title{
        text-align: center;
    }
    .btns{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-bottom: 30px;
        .el-button{
            width:90%;
            margin-left: 0;
        }
    }
</style>