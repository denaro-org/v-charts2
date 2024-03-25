export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadataRegister
  isServer
}) => {
  if (!isServer) {
    if (typeof window !== 'undefined') window.global = window

    import('@v-charts2/chart').then(module => {
      console.log(module)
      Vue.use(module.default)
    })

    import('@v-charts2/hot-chart').then(module => {
      Vue.use(module.default)
    })
  }
}
