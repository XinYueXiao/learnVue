<template>
  <div class="hello">
    <p>我大头儿子</p>
    <h1>{{ msg }}</h1>
    <h2>{{$attrs.play}}</h2>
    <h3>{{getFather}}</h3>
    <button v-on:click="$emit('welcome','小头爸爸我们出去玩')">穿数据给小头爸爸</button>
    <h4>你是谁:{{setFatherToSon}}</h4>
  </div>
</template>

<script>
export default {
  name: "MySon",
  inject: ["setFatherToSon"],
  data() {
    return { getFather: "获取父亲的信息" };
  },
  props: {
    msg: String
  },
  methods: {
    sayHi() {
      console.log("我是小头爸爸");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
