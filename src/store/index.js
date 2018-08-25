import Vue from 'vue'
import Vuex from 'vuex'

import HomePage from './HomePage'
import Article from './Article'
import Author from './Author'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { HomePage, Article, Author }
})
