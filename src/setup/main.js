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
  Header,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/asset/root.css'
import { i18n, loadLanguageAsync } from '@/setup/i18n-setup'
import '@/setup/amap-setup'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThList, faUserCircle, faInfoCircle, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faReact, faVuejs, faAngular, faJava, faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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

library.add(faThList, faUserCircle, faInfoCircle,
  faReact, faVuejs, faAngular, faJava,
  faAngleDoubleRight, faGithub, faBlogger)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  const { lang } = to.params
  loadLanguageAsync(lang).then(() => next())
})

new Vue({
  router,
  store,
  i18n,
}).$mount('#app')
