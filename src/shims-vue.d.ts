export { }

declare module './plugins/i18n' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}