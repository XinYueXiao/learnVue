import Vue from 'vue'
import App from './App.vue'
import router from './router'
import create from "./utils/create";
Vue.config.productionTip = false
Vue.prototype.$create = create
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
