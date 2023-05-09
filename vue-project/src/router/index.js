import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PreviewView from '../views/PreviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        { path: '/container', component: HomeView },
        { path: '/grid', component: HomeView }
      ]
    },
    {
      path: '/preview',
      name: 'preview',
      component: PreviewView
    },
    {
      path: '/colors',
      name: 'colors',
      component: HomeView
    },
    {
      path: '/fonts',
      name: 'fonts',
      component: HomeView
    },
    {
      path: '/component',
      name: 'component',
      component: HomeView,
      children: [
        { path: 'button', component: HomeView },
        { path: 'card', component: HomeView }
      ]
    },
  ]
})

export default router
