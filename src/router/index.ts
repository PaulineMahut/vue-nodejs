import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArticlesView.vue')
    },
    {
      path: '/modify/:id',
      name: 'modify',
      component: () => import('../components/ModifyArticle.vue')
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: () => import('../components/ModifyArticle.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../views/InscriptionView.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/ConnexionView.vue')
    }
  ]
})

export default router
