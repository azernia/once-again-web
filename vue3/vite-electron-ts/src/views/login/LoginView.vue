<template>
  <div class="login-container">
    <el-container>
      <el-aside class="login-left">
        <img :src="logo" alt="LOGO" class="logo">
      </el-aside>
      <el-main class="login-right">
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="rules"
          label-position="top"
          size="large"
        >
          <h2>用户登录</h2>
          <div style="margin-top: 10px">
            <el-form-item label="用户名" prop="username">
              <el-input placeholder="请输入用户名" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input autocomplete="off" placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
              <div class="captcha-container">
                <el-input autocomplete="off" placeholder="请输入验证码"></el-input>
                <img :src="captcha.captchaImage" alt="" @click="renderCaptcha">
              </div>
            </el-form-item>
            <el-button color="#59c27b" style="color: white; width: 100%">登录</el-button>
          </div>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, onMounted} from "vue";
import logoUrl from '../../assets/images/login/logo.png';
import {LoginForm, Captcha} from "./LoginInterface";
import type {FormInstance, FormRules} from "element-plus";
import {getCaptcha} from "../../api/login";
import {msg} from "../../hooks/MessageHook";

const logo = ref(logoUrl);
const captcha = reactive<Captcha>({captchaImage: "", captchaKey: ""})
const loginForm = reactive<LoginForm>({
  captcha: "", password: "", username: ""
});
const loginFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [
    {required: true, message: "请输入用户名", trigger: "blur"}
  ],
  password: [
    {required: true, message: "请输入密码", trigger: "blur"}
  ],
  captcha: [
    {required: true, message: "请输入验证码", trigger: "blur"}
  ]
});
onMounted(  () => {
  renderCaptcha();
});

/**
 * 获取验证码
 */
const renderCaptcha = async () => {
  try {
    const resp = await getCaptcha();
    console.log(resp)
    captcha.captchaImage = resp.data.captchaImage;
    captcha.captchaKey = resp.data.captchaKey;
    msg('成功啦', 'success');
  } catch (error) {
    msg('报错啦', 'error');
  }
}
</script>

<style lang="scss" scoped>
$loginLeftImg: url('../../assets/images/login/login-left.png');
.login-container {
  .login-left {
    background-image: $loginLeftImg;
    background-repeat: no-repeat;
    width: 270px;
    height: calc(100vh);
    .logo {
      margin-top: 10px;
      margin-left: 10px;
    }
  }

  .login-right {
    padding: 35px;
    .captcha-container {
      display: flex;
      justify-content: space-between;
      img {
        height: 40px;
      }
    }
  }
}
</style>
