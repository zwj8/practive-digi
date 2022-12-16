export default {
  namespaced: true,
  state: {
    language: 'zh'
  },
  getters: {
    language (state) {
      return state.language
    }
  },
  mutations: {
    setLanguage (state, code) {
      state.language = code
    }
  },
  actions: {}
}
