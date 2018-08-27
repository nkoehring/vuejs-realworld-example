<template>
<div class="article-preview">
  <ArticleMeta :article="article" :preview="true" />
  <router-link :to="{name: 'article-view', params: {slug: article.slug}}" class="preview-link">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <span>Read more...</span>
    <ul class="tag-list">
      <li v-for="tag in article.tagList"
        :key="tag"
        class="tag-default tag-pill tag-outline">
        {{ tag }}
      </li>
    </ul>
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
