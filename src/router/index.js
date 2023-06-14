import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

 const routes = [
  /* {
    path: ' ',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  }, */
  {
    path: '/',
    name: 'home',
    to: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    to: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/episodes',
    name: 'episodes',
    to: 'episodes',
    component: function () {
      return import('../views/Episodes.vue')
    }
  },
  {
    path: '/add',
    name: 'add',
    to: 'add',
    component: function () {
      return import('../views/Create.vue')
    }
  },
  {
    path: '/details',
    name: 'details',
    to: 'details',
    component: function () {
      return import('../views/Details.vue')
    }
  },
  {
    path: '/one',
    name: 'one',
    to: 'one',
    component: function () {
      return import('../components/ShowOne.vue')
    }
  },
  {
    path: '/cards',
    name: 'cards',
    to: 'cards',
    component: function () {
      return import('../components/CardsCharacters.vue')
    }
  },
  {
    path: '/search',
    name: 'search',
    to: 'search',
    component: function () {
      return import('../components/Search.vue')
    }
  },
] 


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'router-link-active'
})

export default router
