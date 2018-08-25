<template>
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link disabled" href="">Your Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="">Global Feed</a>
            </li>
          </ul>
        </div>

        <div v-if="articlesLoading" class="article-preview">
          Loading articles...
        </div>
        <div v-else-if="articles.length === 0" class="article-preview">
          No articles are here... yet.
        </div>

        <ArticlePreview :key='i' :article="article" v-for="(article,i) in articles" />

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <a v-if="tagsLoading" class="tag-pill">Loading tags...</a>
            <a :key="tag" href="" class="tag-pill tag-default" v-for="tag in tags">{{ tag }}</a>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
// @ is an alias to /src
import ArticlePreview from '@/components/ArticlePreview.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: { ArticlePreview },
  computed: mapState('HomePage', ['articles', 'tags', 'articlesLoading', 'tagsLoading']),
  beforeCreate () {
    this.$store.dispatch('HomePage/fetchRecentArticles')
    this.$store.dispatch('HomePage/fetchTags')
  }
}
</script>
