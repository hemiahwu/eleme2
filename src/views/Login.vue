<script setup lang="ts">
import { ref, computed } from "vue";
import InputGroup from "@/components/InputGroup.vue";
import axios from "../api/index";
import { useRouter } from "vue-router";

// 响应式属性
const phone = ref("");
const verifyCode = ref("");
const btnTitle = ref("获取验证码");
const disabled = ref(false);
const phoneError = ref("");
const codeError = ref("");
const router = useRouter();

// 计算属性
const isClick = computed(() => {
  if (!phone.value || !verifyCode.value) return true;
  else return false;
});

// 方法
const handleLogin = async () => {
  // 根据输入的手机号和验证码实现登录和跳转
  phoneError.value = "";
  codeError.value = "";

  // 请求校验验证码
  try {
    // https://www.thenewstep.cn/frontend/vue/8000/api/posts/sms_back
    // https://www.thenewstep.cn/backend/8000/api/posts/sms_back
    const res = await axios.post("/api/posts/sms_back", {
      phone: phone.value,
      code: verifyCode.value,
    });

    if (res.data.msg === "验证成功") {
      // 本地存储
      localStorage.setItem("token", res.data.user._id);
      // 页面跳转
      router.push("/");
    }
  } catch (error: any) {
    codeError.value = error.response.data.msg;
  }
};

const validatePhone = () => {
  if (!phone.value) {
    phoneError.value = "手机号码不能为空";
    return false;
  } else if (!/^1[345678]\d{9}$/.test(phone.value)) {
    phoneError.value = "手机号码格式不正确";
    return false;
  } else {
    phoneError.value = "";
    return true;
  }
};

const handleCounter = () => {
  let time = 5;

  let timer = setInterval(() => {
    if (time == 0) {
      clearInterval(timer);
      btnTitle.value = "获取验证码";
      disabled.value = false;
    } else {
      btnTitle.value = time + "秒后重试";
      disabled.value = true;
      time--;
    }
  }, 1000);
};

const getVerifyCode = async () => {
  // 验证手机号是否合法
  if (validatePhone()) {
    // 倒计时
    handleCounter();

    // 发起请求
    const res = await axios.post("/api/posts/sms_send", {
      phone: phone.value,
    });
    console.log(res);

    alert(res.data.msg);
    // 657675
  }
};
</script>
<template>
  <div class="login-component">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>

    <InputGroup
      type="number"
      v-model="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="phoneError"
      @btnClick="getVerifyCode"
    />

    <InputGroup
      type="number"
      v-model="verifyCode"
      placeholder="验证码"
      :error="codeError"
    />

    <div class="login-des">
      <p>新用户登录即自动注册，表示已同意 <span>《用户服务协议》</span></p>
    </div>

    <div class="login-btn">
      <button :disabled="isClick" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<style scoped>
.login-component {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.login-component .logo {
  text-align: center;
}

.login-component .logo img {
  width: 150px;
}

.login-component .text-group,
.login-component .login-des,
.login-component .login-btn {
  margin-top: 20px;
}

.login-component .login-des {
  color: #aaa;
  line-height: 22px;
}

.login-component .login-des span {
  color: #4d90fe;
}

.login-component .login-btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}

.login-component .login-btn button[disabled] {
  background-color: #8bda81;
}
</style>
