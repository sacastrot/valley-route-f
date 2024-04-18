import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useStoreUser } from '@/stores/user'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: HomeView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/UserView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue'),
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useStoreUser()
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    console.log('User is not authenticated', userStore.isAuthenticated)
    return next({ name: 'welcome' })
  }
  console.log('User is authenticated', userStore.isAuthenticated)
  return next()
})

export default router
