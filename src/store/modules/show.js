import * as types from '../mutation-types'

const state = {
  hidden: false
}

const getters = {
  isHidden: state => state.hidden
}

const actions = {
  hide({commit, state}) {
    commit(types.HIDE_PAGE)
  },
  show({commit, state}) {
    commit(types.SHOW_PAGE)
  }
}

const mutations = {
  [types.HIDE_PAGE](state) {
    state.hidden = true
  },
  [types.SHOW_PAGE](state) {
    state.hidden = false
  }
}

export default {
  state,
  actions,
  getters,
  actions,
  mutations
}
