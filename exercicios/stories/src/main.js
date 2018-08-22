/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello.vue'
import Login from './components/Login'
import StoriesPage from './components/StoriesPage.vue'
import StoriesAll from './components/StoriesAll.vue'
import StoriesFamous from './components/StoriesFamous.vue'
import StoriesEdit from './components/StoriesEdit.vue'

Vue.use(VueRouter)

Vue.filter('capitalize', function (value) {
  return value.charAt(0).toUpperCase() + value.substr(1)
})

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/stories',
    // name: 'stories',
    component: StoriesPage,
    children: [
      {
        path: '/',
        name: 'stories.all',
        component: StoriesAll
      },
      {
        path: 'famous',
        name: 'stories.famous',
        alias: '/famous',
        component: StoriesFamous
      },
      {
        path: ':id/edit',
        props: (route) => ({ id: Number(route.params.id) }),
        name: 'stories.edit',
        component: StoriesEdit
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes // short for routes: routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
