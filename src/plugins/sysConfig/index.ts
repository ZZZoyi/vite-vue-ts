export default {
  install: (app: any, options: any) => {
    app.provide('sysConfig', options)
  }
}