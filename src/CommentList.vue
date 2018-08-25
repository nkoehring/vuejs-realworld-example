<template>
<div class="row">
  <div class="col-xs-12 col-md-8 offset-md-2">
    <CommentForm :comment="newComment" @submit="submitComment($event)" />
    <Comment v-for="(comment,i) in comments"
      :key="i"
      :comment="comment"
      :modifiable="isCurrentUser(comment.author)"
    />
  </div>
</div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import CommentForm from '@/components/CommentForm.vue'
import Comment from '@/components/Comment.vue'

export default {
  components: { CommentForm, Comment },
  beforeCreate () {
    // TODO:
    // this.$store.dispatch('article/comments/fetch')
  },
  computed: {
    // TODO: use mapGetters
    currentUser () {
      return { username: 'Señor Developer' }
    },
    newComment () {
      return { author: this.currentUser }
    },
    comments () {
      return []
    }
  },
  methods: {
    // TODO: use mapActions
    isCurrentUser (comment) {
      // return currentUser.username === comment.author.username
      return true
    },
    submitComment (evt) {
      console.warn('would submit comment', evt)
    }
  }
}
</script>
