import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Home
    },

  ]
})
export default router; 