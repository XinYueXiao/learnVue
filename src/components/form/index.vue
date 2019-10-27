<template>
  <div>
    <k-input v-model="model.username"></k-input>
    <k-input v-model="model.password" type="password"></k-input>
    {{model}}
  </div>
</template>
<script>
import KInput from "./KInput.vue";
export default {
  data() {
    return {
      model: { username: "wxy", password: "" }
    };
  },
  components: { KInput }
};
</script>