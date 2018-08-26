import { fetchArticleComments, postArticleComment, deleteArticleComment } from '@/api'

const state = {
  comments: [],
  slug: null,
  isLoading: false
}

const mutations = {
  setIsLoading (state, slug) {
    state.isLoading = true
    state.slug = slug
  },
  setComments (state, payload) {
    // TODO: Good idea to blindly replace the state?
    state.comments = payload.comments
    state.isLoading = false
  }
}

const actions = {
  async fetch ({ commit }, slug) {
    commit('setIsLoading', slug)
    const comments = await fetchArticleComments(slug)
    commit('setComments', comments)
  },
  async submit ({ commit, dispatch }, payload) {
    commit('addComment', payload)
    await postArticleComment(state.slug, payload)
    dispatch('fetch', state.slug)
  },
  async trash ({ state, dispatch }, id) {
    await deleteArticleComment(state.slug, id)
    dispatch('fetch', state.slug)
  }
}

const getters = {
}

export default { state, mutations, actions, getters, namespaced: true }

