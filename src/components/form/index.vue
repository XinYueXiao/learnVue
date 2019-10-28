<template>
  <div>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFromItem label="用户名" prop="username">
        <!--子集可通过 v-bind="$attrs" 获取placeholder="请输入用户名" 此类信息  -->
        <div>
          <k-input v-model="model.username" placeholder="请输入用户名"></k-input>
        </div>
      </KFromItem>

      <KFromItem label="密码" prop="password">
        <k-input v-model="model.password" type="password" placeholder="请输入密码"></k-input>
      </KFromItem>
      <KFromItem>
        <button @click="onLogin">登录</button>
      </KFromItem>
    </KForm>
    {{model}}
  </div>
</template>
<script>
import KInput from "./KInput.vue";
import KFromItem from "./KFromItem";
import KForm from "./KForm";
import Notice from "../../Notice";

export default {
  data() {
    return {
      model: { username: "wxy", password: "" },
      rules: {
        username: { required: true, message: "必填项" },
        password: { required: true, message: "必填项" }
      }
    };
  },
  components: {
    KInput,
    KFromItem,
    KForm,
    Notice
  },
  methods: {
    onLogin() {
      this.$refs.loginForm.validate(isValid => {
        console.log("TCL: onLogin -> isValid", isValid);
        // if (isValid) {
        //   alert("请求登录");
        // } else {
        //   alert("登录失败");
        // }
        this.$create(Notice, {
          title: "登录成功了吗?",
          message: isValid ? "登录中！" : "校验失败！",
          duration: 2000
        }).show();
      });
    }
  }
};
</script>