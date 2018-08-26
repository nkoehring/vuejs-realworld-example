<template>
<div class="card">
  <div class="card-block">
    <p class="card-text">{{ comment.body }}</p>
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
    <span v-if="options" class="mod-options">
      <i v-show="!confirm" class="ion-trash-a" @click="confirm = true"></i>
      <button v-show="confirm"
        class="btn btn-sm btn-outline-danger"
        @click="$emit('trash')">
        sure?
      </button>
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    },
    options: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      confirm: false
    }
  }
}
</script>
