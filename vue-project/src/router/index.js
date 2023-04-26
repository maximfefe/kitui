import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PreviewView from '../views/PreviewView.vue'
import ColorsView from '../views/ColorsView.vue'
import FontsView from '../views/FontsView.vue'
import ComponentView from '../views/componentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/preview',
      name: 'preview',
      component: PreviewView
    },
    {
      path: '/colors',
      name: 'colors',
      component: ColorsView
    },
    {
      path: '/fonts',
      name: 'fonts',
      component: FontsView
    },
    {
      path: '/component',
      name: 'component',
      component: ComponentView,
      children: [
        { path: 'button', component: ComponentView },
        { path: 'card', component: ComponentView }
      ]
    },
  ]
})

export default router
