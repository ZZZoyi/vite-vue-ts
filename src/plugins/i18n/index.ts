import { options } from './config'

export default {
  install: (app: any) => {
    app.config.globalProperties.$translate = (key: string) => {
      return key.split('.').reduce((o: any, i: string) => {
        if (o) return o[i]
      }, options)
    }
  }
}