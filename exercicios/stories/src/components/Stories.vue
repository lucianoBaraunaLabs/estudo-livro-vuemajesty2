<template>
  <ul class="list-group">
    <li v-for="story in stories" :key="story.plot" class="list-group-item">
      {{ story.writer }} said "{{ story.plot }}"
      Story upvotes {{ story.upvotes }}.
    </li>
  </ul>
</template>

<script>
import {store} from '../store.js'

export default {
  name: 'Stories',
  data () {
    return {
      stories: store.stories
    }
  }
}
</script>

<style scoped>

</style>
