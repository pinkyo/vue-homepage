import VueRouter from 'vue-router'

const mainContainer = () => import('@/pages/main-container/main-container')
const home = () => import('@/pages/home/home')
const author = () => import('@/pages/author/author')
const about = () => import('@/pages/about/about')
const react = () => import('@/pages/react/react')
const vue = () => import('@/pages/vue/vue')
const angular = () => import('@/pages/angular/angular')
const java = () => import('@/pages/java/java')

const routes = [
  {
    path: '/',
    component: mainContainer,
    children: [
      { path: '', component: home },
      { path: 'author', component: author },
      { path: 'about', component: about },
      { path: 'frontend/react', component: react },
      { path: 'frontend/vue', component: vue },
      { path: 'frontend/angular', component: angular },
      { path: 'backend/java', component: java },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
