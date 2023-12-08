import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/outer',
    component: () => import('../views/Outer.vue')
  },
  {
    path: '/pinia',
    component: () => import('../views/Pinia.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router