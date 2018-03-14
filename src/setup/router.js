import VueRouter from 'vue-router'
import main from '@/pages/main'
import home from '@/pages/home'
import author from '@/pages/author'
import about from '@/pages/about'
import react from '@/pages/react'
import vue from '@/pages/vue'
import angular from '@/pages/angular'
import java from '@/pages/java'

const routes = [
  {path: '/', component: main,
   children: [
    {path: 'home', component: home},
    {path: 'author', component: author},
    {path: 'about', component: about},
    {path: 'frontend/react', component: react},
    {path: 'frontend/vue', component: vue},
    {path: 'frontend/angular', component: angular},
    {path: 'backend/java', component: java},
   ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/vue-demo/',
  routes
})

export default router
