import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import store from 'store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

const app = new Vue({
  router,
  store
}).$mount('#app')
