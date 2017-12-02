import VueRouter from 'vue-router'
import main from '@/pages/main'
import home from '@/pages/home'
import about from '@/pages/about'

const routes = [
  {path: '/', component: main,
   children: [
    {path: 'home', component: home},
    {path: 'about', component: about}
   ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
