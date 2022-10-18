import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),  // h 为 createElement
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
