import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../pages/app';
import router from '@/setup/router';
import store from '@/store';
import ElementUI, { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/asset/root.css';
import '@/asset/palette.css';
import { i18n, loadLanguageAsync } from '@/setup/i18n-setup';
import '@/setup/amap-setup';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThList, faUserCircle, faInfoCircle, faAngleDoubleRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact, faVuejs, faAngular, faJava, faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.prototype.$loading = Loading.service;

library.add(
  faThList,
  faUserCircle,
  faInfoCircle,
  faReact,
  faVuejs,
  faAngular,
  faJava,
  faAngleDoubleRight,
  faGithub,
  faBlogger,
  faMapMarkerAlt
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const { lang } = to.params;
  loadLanguageAsync(lang).then(() => next());
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
