import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      titlebar: 'titlebar',
      user: null,
      locales: ['en', 'fr'],
      locale: 'en'
    },
    mutations: {
      SET_TITLEBAR(state, text) {
        state.titlebar = text || null
      },
      SET_LANG (state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      }
    },
    getters: {
      titlebar(state) {
        return state.titlebar
      }
    }
  })
}

export default store
