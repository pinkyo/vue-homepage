import VueRouter from 'vue-router'

const mainContainer = () => import(/* webpackChunkName: "main-container" */ '@/pages/main-container')
const home = () => import(/* webpackChunkName: "home" */ '@/pages/home')
const author = () => import(/* webpackChunkName: "author" */ '@/pages/author')
const about = () => import(/* webpackChunkName: "about" */ '@/pages/about')
const react = () => import(/* webpackChunkName: "frontend-react" */ '@/pages/react')
const vue = () => import(/* webpackChunkName: "frontend-vue" */ '@/pages/vue')
const angular = () => import(/* webpackChunkName: "frontend-angular" */ '@/pages/angular')
const java = () => import(/* webpackChunkName: "backend-java" */ '@/pages/java')

const routes = [
  {path: '/', component: mainContainer,
   children: [
    {path: '', component: home},
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
  routes
})

export default router
