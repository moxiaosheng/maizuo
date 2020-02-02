import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Films from '../views/Home/HomeFilms.vue'
import Cinemas from '../views/Home/HomeCinemas.vue'
import Center from '../views/Home/HomeCenter.vue'
import Cinema from '../views/Cinema.vue'
import City from '../views/City.vue'
import Film from '../views/Film.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'films',
        component: Films
      },
      {
        path: 'cinemas',
        component: Cinemas
      },
      {
        path: 'center',
        component: Center
      },
      {
        path: '',
        redirect: '/films'
      }
    ]
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/film/:id',
    component: Film
  },
  {
    path: '/cinema/:id/film',
    component: Cinema
  },
  {
    path: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
