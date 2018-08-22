<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul class="nav nav-tabs">
      <li v-for="page in pages" :key="page" :class="isActivePage(page) ? 'active' :''">
        <a @click="setPage(page)">{{page | capitalize}}</a>
      </li>
    </ul>
    <!-- <Login /> -->
    <!-- <Register />
    <Stories /> -->
    <component :is="activePage" />
  </div>
</template>

<script>
import Login from './components/Login'
import Register from './components/Register'
import Stories from './components/Stories'

export default {
  name: 'app',
  components: {
    Login,
    Register,
    Stories
  },
  data () {
    return {
      pages: [
        'login',
        'register',
        'stories'
      ],
      activePage: 'stories'
    }
  },
  methods: {
    setPage (newPage) {
      this.activePage = newPage
    },
    isActivePage (page) {
      return this.activePage === page
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
