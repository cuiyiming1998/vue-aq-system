<template>
    <el-form class="login-container" ref="form" label-position="top" :model="form" :rules="rules" label-width="80px">
        <h1 class="login-title">登录</h1>
        <!-- 通过prop属性设置需要验证的值 -->
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" show-password>
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div class="btns">
            <el-button type="primary" @click="submitForm('form')">登录</el-button>
            <el-button @click="goSignup">注册</el-button>
        </div>
    </el-form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            form: {
            name: '',
            password: '',
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
    methods: {
        // 登录验证
        submitForm(formName){
            // 需要用一个变量先保存this为VueComponent
            // 否则无法在axios里使用this
            const self = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //格式验证成功，服务器请求数据
                    axios({
                        method: 'post',
                        url: '/login',
                        data:{
                            username: self.form.name,
                            password: self.form.password
                        }
                    }).then(function(res){
                        if(res.data.code == 0){
                            self.$router.push({path:'/'});
                            self.$message({
                                type: 'success',
                                message: '登录成功！'
                            })
                            self.$store.commit('setUserInfo',res.data.data);
                        }else if(res.data.code == 2){
                            self.$message.error('该账号已被禁用！');
                            self.form.name = '';
                            self.form.password = '';
                        }
                        else{
                            self.$message.error('用户名或密码不正确！');
                            self.form.name = '';
                            self.form.password = '';
                        }
                    }).catch(function(error){
                        console.log(error);
                    })
                } else {
                    // 验证弹窗
                    this.$message.error('用户名或密码格式不正确！')
                    return false;
                }
            });
        },
        goSignup(){
            this.$parent.isSignin = !this.$parent.isSignin;
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-container{
        width: 70%;
        height: 100%;
        position: relative;
        top: 0;
    }
    .login-title{
        text-align: center;
        margin-top: 50px;
    }
    .btns{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        .el-button{
            width:90%;
            margin-left: 0;
        }
    }
</style>