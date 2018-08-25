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

const articles = [{
  author: { username: 'Eric Simons', image: 'http://i.imgur.com/Qr71crq.jpg' },
  createdAt: 'January 20th',
  favouritesCount: 29,
  title: 'How to build webapps that scale',
  description: 'This is the description for the post',
  tagList: []
}, {
  author: { username: 'Albert Pai', image: 'http://i.imgur.com/N4VcUeJ.jpg' },
  createdAt: 'January 20th',
  favouritesCount: 32,
  title: 'The song you won\'t ever stop singing. No matter how hard you try.',
  description: 'This is the description for the post',
  tagList: []
}]
const tags = [
  'programming',
  'javascript',
  'emberjs',
  'angularjs',
  'react',
  'mean',
  'node',
  'rails'
]

export default {
  name: 'home',
  components: { ArticlePreview },
  data () {
    return { articles, tags }
  }
}
</script>
