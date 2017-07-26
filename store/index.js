import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    tittleBar: ''
  },
  mutations: {
    setTitleBar(state, text) {
      state.user = text || null
    }
  },
  getters: {
    tittleBar(state) {
      return state.tittleBar
    }
  },
  modules: {
    todos: {
      state: {
        titleBar: 'adasd'
      },
      mutations: {
        add(state, { text }) {
          state.titleBar = text
        }
      }
    }
  }
})

export default store
