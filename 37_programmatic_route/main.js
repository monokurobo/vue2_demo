import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),  // h 为 createElement
  router: router
}).$mount('#app')
