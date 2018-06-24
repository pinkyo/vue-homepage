import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/setup/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/font.css'
import {i18n, loadLanguageAsync} from '@/setup/i18n-setup'
import '@/setup/amap-setup.js'

Vue.use(VueRouter)
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  loadLanguageAsync(lang).then(() => next())
})

const app = new Vue({
  router,
  store,
  i18n
}).$mount('#app')

