<template>
<div v-if="!edit" class="card">
  <div class="card-block">
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div class="card-footer">
    <a href="" class="comment-author">
      <img :src="comment.author.image" class="comment-author-img" />
    </a>
    &nbsp;
    <router-link :to="{}" class="comment-author">
      {{ comment.author.username }}
    </router-link>
    <span class="date-posted">{{ comment.createdAt }}</span>
    <span v-if="modifiable" class="mod-options">
      <i class="ion-edit" @click="edit = true"></i>
      <i class="ion-trash-a" @click="destroy"></i>
    </span>
  </div>
</div>
<CommentForm v-else
  :comment="comment"
  @submit="edit = false"
  @cancel="edit = false"
/>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  props: {
    comment: {
      type: Object,
      required: true
    },
    modifiable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      edit: false
    }
  },
  methods: {
    destroy () { console.warn('would destroy', this.comment) }
  }
  /* TODO:
  methods: mapActions({
    destroy: 'article/comments/destroy'
  })
  */
}
</script>
