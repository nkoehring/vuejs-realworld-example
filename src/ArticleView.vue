<template>
<div class="article-page" v-if="isLoading">
  <div class="banner">
    <div class="container">
      Loading article...
    </div>
  </div>
</div>

<div class="article-page" v-else>

  <div class="banner">
    <div class="container">
      <h1>{{ article.title }}</h1>
      <ArticleMeta :article="article" />
    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="renderedContent"></div>
    </div>

    <hr />

    <div class="article-actions">
      <ArticleMeta :article="article" />
    </div>

    <CommentList />

  </div>

</div>
</template>

<script>
import store from '@/store'
import marked from 'marked'
import ArticleMeta from '@/components/ArticleMeta.vue'
import CommentList from '@/CommentList.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('Article')

export default {
  name: 'article-view',
  components: { ArticleMeta, CommentList },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('Article/fetch', to.params.slug)
    store.dispatch('Article/Comments/fetch', to.params.slug)
    next()
  },
  computed: {
    ...mapState(['article', 'isLoading']),
    renderedContent () {
      return marked(this.article.body)
    }
  }
}
</script>
