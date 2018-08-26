<template>
<div class="article-meta">
  <router-link :to="{name: 'profile', params: {username: article.author.username}}">
    <img :src="article.author.image" />
  </router-link>

  <div class="info">
    <router-link :to="{name: 'profile', params: {username: article.author.username}}" class="author">
      {{ article.author.username }}
    </router-link>
    <span class="date">{{ article.createdAt | date }}</span>
  </div>

  <template v-if="preview">
    <button class="btn btn-outline-primary btn-sm pull-xs-right">
      <i class="ion-heart"></i> {{ article.favouritesCount }}
    </button>
  </template>
  <template v-else>
    <button class="btn btn-sm btn-outline-secondary">
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow Eric Simons <span class="counter">({{ article.author.followersCount }})</span>
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{ article.favouritesCount }})</span>
    </button>
  </template>
</div>
</template>

<script>
export default {
  name: 'article-meta',
  props: {
    article: Object,
    preview: Boolean
  }
}
</script>
