<template>
<div class="row">
  <div class="col-xs-12 col-md-8 offset-md-2">
    <CommentForm :comment="newComment" @submit="submitComment($event)" />

    <div v-if="isLoading">loading comments...</div>
    <Comment v-for="comment in comments" v-else
      :key="comment.id"
      :comment="comment"
      :options="isCurrentUser(comment.author)"
      @trash="trash(comment.id)"
    />
  </div>
</div>
</template>

<script>
import CommentForm from '@/components/CommentForm.vue'
import Comment from '@/components/Comment.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('Article/Comments')

export default {
  components: { CommentForm, Comment },
  computed: {
    ...mapState(['comments', 'isLoading']),
    currentUser () {
      return { username: 'Señor Developer' }
    },
    newComment () {
      return { author: this.currentUser }
    }
  },
  methods: {
    ...mapActions(['trash', 'submit']),
    isCurrentUser (comment) {
      // return currentUser.username === comment.author.username
      return true
    }
  }
}
</script>
