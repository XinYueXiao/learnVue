<template>
  <div id="app">
    <!-- router组件 -->
    <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">about</router-link>
    </div>
    <router-view></router-view>
    <!-- 表单组件 -->
    <!-- <form-test /> -->
    <!-- <Father msg="hello,大家好">
      <template>lllll</template>
      <template v-slot:wxy="{sex}">{{sex}}</template>
    </Father>
    <Brother />-->
  </div>
</template>

<script>
// import Father from "./components/Father.vue";
// import Brother from "./components/Brother.vue";
import FormTest from "./components/form/index.vue";
export default {
  name: "app",
  provide() {
    return {
      setFatherToSon: "我是小头爷爷"
    };
  },
  components: {
    // Father,
    // Brother,
    FormTest
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hello {
  margin: auto;
  max-width: 400px;
  padding: 40px;
  border: 1px dotted #999;
}
</style>
