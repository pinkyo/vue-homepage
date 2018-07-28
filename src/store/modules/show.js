import * as types from '../mutation-types'

const initialState = {
  hidden: false,
}

const getters = {
  isHidden: state => state.hidden,
}

const actions = {
  hide({ commit }) {
    commit(types.HIDE_PAGE)
  },
  show({ commit }) {
    commit(types.SHOW_PAGE)
  },
}

const mutations = {
  [types.HIDE_PAGE](state) {
    state.hidden = true
  },
  [types.SHOW_PAGE](state) {
    state.hidden = false
  },
}

export default {
  state: initialState,
  actions,
  getters,
  mutations,
}
