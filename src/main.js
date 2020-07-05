import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'; 
import Header from "@/common/header"
Vue.config.productionTip = false
Vue.use(Mint); 
Vue.component("Header",Header);
Vue.filter("toPath",(val,params)=>{
   var reg = /w\.h/;
   return val.replace(reg,params)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
