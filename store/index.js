import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      titlebar: 'titlebar',
      user: null
    },
    mutations: {
      SET_TITLEBAR(state, text) {
        state.titlebar = text || null
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
