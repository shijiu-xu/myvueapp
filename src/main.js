import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'; 
import Header from "@/common/header"

Vue.use(Mint); 

Vue.config.productionTip = false
Vue.component("Header",Header);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
