const files = require.context('./components', false, /\.vue$/)

const loading = {
  install (Vue) {
    files.keys().forEach(key => {
      Vue.component(key.replace(/(\.\/|\.vue)/g, ''), files(key).default)
    })
  }
}

export default loading
