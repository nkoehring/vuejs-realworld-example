import Vue from 'vue'
import Vuex from 'vuex'

import HomePage from './HomePage'
import Article from './Article'
import Author from './Author'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { HomePage, Article, Author }
})
