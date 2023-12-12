import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'

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
  },
  {
    path: '/todo',
    component: () => import('../views/Todo.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach(async (_to, _from, next) => {
  NProgress.start()
  next()
})

router.afterEach((_to) => {
  NProgress.done()
})

export default router
