import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    tittleBar: ''
  },
  mutations: {
    setTitleBar(state, { text }) {
      state.tittleBar = text
    }
  }
})

export default store
