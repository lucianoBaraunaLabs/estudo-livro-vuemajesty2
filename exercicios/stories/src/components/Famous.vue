<template>
  <div id="famous">
    <h2>Trending stories<strong>({{stories.length}})</strong></h2>
    <ul class="list-group">
      <li v-for="story in famous" :key="story.plot" class="list-group-item">
        {{ story.writer }} said "{{ story.plot }}".
        Story upvotes {{ story.upvotes }}.
      </li>
    </ul>
  </div>
</template>

<script>
import {store} from '../store.js'

export default {
  name: 'Famous',
  data () {
    return {
      stories: store.stories
    }
  },
  computed: {
    famous () {
      return this.stories.filter(function (item) {
        return item.upvotes > 50
      })
    }
  }
}
</script>

<style scoped>

</style>
