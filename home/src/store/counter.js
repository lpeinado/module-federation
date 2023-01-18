
import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 7
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment ({commit}) {
      commit('increment')
    }
  }
})

export default store
