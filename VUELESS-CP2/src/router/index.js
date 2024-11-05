import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import UsersView from '@/views/UsersView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'

function checkAuth() {
  let token = localStorage.getItem('token')
  if (token !== null) {
    return true
  } else {
    return false
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/profile' && !checkAuth()) {
    next('/')
  } else {
    next()
  }
})

export default router
