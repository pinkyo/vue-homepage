import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/setup/router'
import store from '@/store'
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Container,
  Footer,
  Main,
  Aside,
  Header
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {i18n, loadLanguageAsync} from '@/setup/i18n-setup'
import '@/setup/amap-setup.js'

Vue.use(VueRouter)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Container)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)


router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  loadLanguageAsync(lang).then(() => next())
})

const app = new Vue({
  router,
  store,
  i18n
}).$mount('#app')

