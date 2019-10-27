<template>
  <div>
    <KForm :model="model" :rules="rules">
      <KFromItem label="用户名" prop="username">
        <!--子集可通过 v-bind="$attrs" 获取placeholder="请输入用户名" 此类信息  -->
        <k-input v-model="model.username" placeholder="请输入用户名"></k-input>
      </KFromItem>
      <KFromItem label="密码" prop="password">
        <k-input v-model="model.password" type="password" placeholder="请输入密码"></k-input>
      </KFromItem>
    </KForm>
    {{model}}
  </div>
</template>
<script>
import KInput from "./KInput.vue";
import KFromItem from "./KFromItem";
import KForm from "./KForm";
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
    KForm
  }
};
</script>