<template>
  <el-row
    class="login"
    :gutter="10"
    type="flex"
    justify="center"
    align="middle"
  >
    <el-col
      :xs="14"
      :sm="12"
      :md="10"
      :lg="8"
      :xl="8"
    >
      <el-form
        label-position="top"
        :model="loginForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="login-form"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://localhost:8888/api/private/v1/login", this.loginForm)
            .then(res => {
              if (res.data.meta.status === 200) {
                localStorage.setItem("token", res.data.data.token);
                this.$router.push("/home");
                this.$message({
                  message: res.data.meta.msg,
                  type: "success",
                  duration: 800
                });
              } else {
                this.$message({
                  message: res.data.meta.msg,
                  type: "error",
                  duration: 1000
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.login {
  height: 100%;
  background: #2d434c;
}
.login-form {
  padding: 20px;
  border-radius: 15px;
  background: #fff;
}
</style>
