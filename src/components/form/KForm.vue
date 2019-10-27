<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      // 调用所有formitem的validate，只要一个失败就失败
      // 结果是Promise数组
      const task = this.$children
        .filter(item => !!item.prop)
        .map(item => item.validate());
      console.log("TCL: validate -> task", task);

      // 判断所有结果
      Promise.all(task)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>