<template>
<div class="article-preview">
  <ArticleMeta :article="article" :preview="true" />
  <router-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <span>Read more...</span>
  </router-link>
</div>
</template>

<script>
import ArticleMeta from '@/components/ArticleMeta.vue'
export default {
  name: 'article-preview',
  components: { ArticleMeta },
  props: {
    article: Object
  }
}
</script>
