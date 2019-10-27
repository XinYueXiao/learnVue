<template>
  <!-- v-bind="$attrs" 的作用是直接使用父级传过来的属性 -->
  <input :type="type" @input="onInput" :value="value" v-bind="$attrs" />
</template> 
<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    }
  }
};
</script>
