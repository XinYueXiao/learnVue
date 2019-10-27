
<template>
  <div class="hello">我是小头爸爸的哥哥</div>
</template>

<script>
export default {
  name: "Father",
  props: {
    msg: String
  },
  created() {
    this.$parent.$on("goOut", a => {
      console.log("小头爸爸干嘛去了?大头爷爷回答", a);
    });
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
