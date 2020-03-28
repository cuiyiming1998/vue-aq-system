<template>
    <div class="login-box">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <h3 class="login-title">请登录</h3>
            <!-- 通过prop属性设置需要验证的值 -->
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">登录</el-button>
                <el-button>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
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
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ],
                // 对password进行验证
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                        message: '登录成功!',
                        type: 'success'
                    })
                } else {
                    // 验证弹窗
                    this.$message.error('用户名或密码格式不正确！')
                    return false;
                }
                this.$router.push({path:'/'})
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-box{
        width: 500px;
        height: 300px;
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto;
        border: 1px solid #DCDFE6;
        padding: 20px 50px 20px 30px;
        border-radius: 20px;
        box-shadow: 0px 0px 20px #DCDFE6;
        .login-title{
            text-align: center;
        }
    }
</style>