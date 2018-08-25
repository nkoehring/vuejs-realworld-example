import { fetchRecentArticles, fetchTags } from '@/api'

const state = {
  articles: [],
  tags: [],
  articlesCount: 0,
  articlesLoading: false,
  tagsLoading: false
}

const mutations = {
  setArticlesLoading (state) {
    state.articlesLoading = true
  },
  setTagsLoading (state) {
    state.tagsLoading = true
  },
  setArticles (state, { articles, articlesCount }) {
    state.articles = articles
    state.articlesCount = articlesCount
    state.articlesLoading = false
  },
  setTags (state, { tags }) {
    state.tags = tags
    state.tagsLoading = false
  }
}

const actions = {
  async fetchRecentArticles ({ commit }) {
    commit('setArticlesLoading')
    const articleData = await fetchRecentArticles()
    commit('setArticles', articleData)
  },
  async fetchTags ({ commit }) {
    commit('setTagsLoading')
    const tags = await fetchTags()
    commit('setTags', tags)
  }
}

const getters = {
}

export default { state, mutations, actions, getters, namespaced: true }
