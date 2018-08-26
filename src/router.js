import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/HomePage.vue'
import ArticleView from '@/ArticleView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/article/:slug',
      name: 'article-view',
      component: ArticleView
    },
    {
      path: '/profile/:username',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (editor.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "profile" */ '@/Profile.vue')
    },
    {
      path: '/editor/:slug?',
      name: 'editor',
      component: () => import(/* webpackChunkName: "editor" */ '@/Editor.vue')
    }
  ]
})
