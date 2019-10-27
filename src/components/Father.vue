
<template>
  <div class="hello">
    我是小头爸爸
    <h1>{{ msg }}</h1>
    <MySon play="大头儿子,我是小头爸爸" ref="myson" v-on:welcome="getSon" />

    <button v-on:click="sayWeiqun">大头爷爷,告诉围裙妈妈我出去了</button>

    <p>
      <slot>无名字</slot>
    </p>
    <p>
      <slot name="wxy" :sex="sex"></slot>
    </p>
  </div>
</template>

<script>
import MySon from "./MySon.vue";
export default {
  name: "Father",
  props: {
    msg: String
  },
  data() {
    return {
      sex: "男"
    };
  },
  components: {
    MySon
  },
  mounted() {
    this.$refs.myson.getFather = "大头儿子不喜欢你";
    this.$children[0].getFather = "大头儿子出去玩了";
  },

  methods: {
    getSon(hi) {
      console.log(hi);
    },
    sayWeiqun() {
      this.$parent.$emit("goOut", "我出去了");
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
