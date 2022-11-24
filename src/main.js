import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import { Row,Button } from 'element-ui';
Vue.config.productionTip = false

// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Row)


new Vue({
  render: h => h(App),  // h 为 createElement
}).$mount('#app')
