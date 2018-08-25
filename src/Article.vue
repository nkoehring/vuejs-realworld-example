<template>
<div class="article-page">

  <div class="banner">
    <div class="container">
      <h1>{{ article.title }}</h1>
      <ArticleMeta :article="article" />
    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12">
        {{ article.body }}
      </div>
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
import CommentList from '@/CommentList.vue'

export default {
  name: 'article',
  components: { CommentList }
}
</script>
