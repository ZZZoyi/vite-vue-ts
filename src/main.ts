import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/styles/element/index.scss'
import App from './App.vue'
import i18nPlugin from './plugins/i18n'
import sysConfigPlugin from './plugins/sysConfig'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(i18nPlugin)
app.use(sysConfigPlugin, { a: {b: 'hahahhaha'} })
// app.directive('focus', {
  //   mounted: (el) => el.focus()
// })
app.mount('#app')