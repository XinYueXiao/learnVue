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
      //this.$parent.$emit("validate");
      this.dispatch("k-form-item", "validate");
    },
    //老师的
    /*dispatch(eventName, data) {
      let parent = this.$parent;
      // 查找父元素
      while (parent) {
        // 父元素用$emit触发
        parent.$emit(eventName, data);
        // 递归查找父元素
        parent = parent.$parent;
      }
    }*/
    //源码中
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      //如果父级存在        name存在或者name不等于传入的componentName都进入循环

      while (parent && (!name || name !== componentName)) {
        //新的父级元素
        parent = parent.$parent;
        if (parent) {
          //存在父级,就把新的父级的名字就重新赋值
          name = parent.$options.componentName;
        }
      }
      //结束循环条件 parent 不存在   &&  name不存在&&name==compontName
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    }
  }
};
</script>
