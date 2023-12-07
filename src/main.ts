import { createApp } from 'vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/styles/element/index.scss'
import App from './App.vue'
import i18nPlugin from './plugins/i18n'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(i18nPlugin)
// app.directive('focus', {
  //   mounted: (el) => el.focus()
// })
app.mount('#app')