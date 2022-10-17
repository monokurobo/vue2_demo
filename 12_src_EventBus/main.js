import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),  // h 为 createElement
  beforeCreate () {
    Vue.prototype.$bus = this // 全局数据总线
  }
}).$mount('#app')
