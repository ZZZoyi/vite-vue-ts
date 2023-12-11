import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/styles/element/index.scss'
import 'nprogress/nprogress.css'
import App from './App.vue'
import i18nPlugin from '@/plugins/i18n'
import sysConfigPlugin from '@/plugins/sysConfig'
import router from '@/router/index'
import store from '@/store'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(i18nPlugin)
app.use(sysConfigPlugin, { a: { b: 'hahahhaha' } })
// app.directive('focus', {
//   mounted: (el) => el.focus()
// })
app.mount('#app')
