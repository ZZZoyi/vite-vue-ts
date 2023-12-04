import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
const app = createApp(App)
app.use(router)
app.mount('#app')