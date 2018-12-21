import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueRouter from 'vue-router' 
Vue.config.productionTip = false
export const serverBus = new Vue();
Vue.use(VueRouter)  
new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
