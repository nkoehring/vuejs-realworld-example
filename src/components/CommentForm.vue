<template>
<form class="card comment-form" @submit.prevent="$emit('submit', $event)">
  <div class="card-block">
    <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
  </div>
  <div class="card-footer">
    <img :src="author.image" class="comment-author-img" />
    <input type="submit" class="btn btn-sm btn-primary" value="Post Comment" />
  </div>
</form>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>
