<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <!-- 需要input触发校验 -->
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>
<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      //获取校验规则和当前值
      //此处使用form需要inject到form
      //this.prop需要提前声明
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];

      //创建Schema实例
      const schema = new Schema({
        [this.prop]: rules
      });

      //使用该实例执行校验
      return schema.validate(
        {
          [this.prop]: value
        },
        errors => {
          if (errors) {
            this.error = errors[0].message;
          } else {
            this.error = "";
          }
        }
      );
    }
  }
};
</script>
<style scoped>
.error {
  color: #f00;
}
</style>