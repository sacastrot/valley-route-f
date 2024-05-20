/**
 * In this file we define the routes for the application.
 *
 * The routes are defined as an array of objects, where each object represents a route.
 *
 * Each route object has the following properties:
 * - path: The path of the route
 * - name: The name of the route
 * - component: The component to render when the route is active
 * - meta: Additional information about the route
 *
 * The routes are defined using the createRouter function from Vue Router.
 *
 */

import { createRouter, createWebHistory } from 'vue-router'
import { useStoreUser } from '@/stores/user'
import HomeView from '../views/HomeView.vue'

const routes = [
  /**
   * This route refers to the welcome page.
   * The welcome page is the first page that the user sees when they visit the application.
   */
  {
    path: '/welcome',
    name: 'welcome',
    component: HomeView,
    meta: {
      requiresAuth: false
    }
  },
  /**
   * This route refers to the login page.
   * The login page is where the user logs in to the application.
   */
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      requiresAuth: false
    }
  },

  /**
   * This route refers to the user home page.
   * The user home page is where the user sees their packages,
   * and can create new packages. Also the user
   * can track a package.
   */
  {
    path: '/',
    name: 'userhome',
    component: () => import('@/views/UserView.vue'),
    meta: {
      requiresAuth: true
    }
  },

  /**
   * This route refers to the signup page.
   * The signup page is where the user signs up to the application.
   */
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignupView.vue'),
    meta: {
      requiresAuth: false
    }
  },

  /**
   * This route refers to the packages page.
   * The packages page is where the user sees all their packages.
   */
  {
    path: '/packages',
    name: 'packages',
    component: () => import('@/views/ViewPackages.vue'),
    meta: {
      requiresAuth: true
    }
  },

  /**
   * This route refers to the new package page.
   * The new package page is where the user creates a new package.
   */
  {
    path: '/package/new',
    name: 'new-package',
    component: () => import('@/views/NewPackageView.vue'),
    meta: {
      requiresAuth: true
    }
  },

  /**
   * This route refers to the track package page.
   * The track package page is where the user tracks a package.
   * The user can see the status of the package.
   * This route is accessible for not authenticated users.
   */
  {
    path: '/package/track',
    name: 'track-package',
    component: () => import('@/views/TrackPackageView.vue'),
    meta: {
      requiresAuth: false
    }
  },

  /**
   * This route refers to the statistics page.
   *
   * The statistics page is where the user sees the statistics of the packages.
   * This route is accessible for not authenticated users.
   */
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('@/views/StatisticsView.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

/**
 * The routes for the application.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

/**
 * This function is called before each route navigation.
 *
 * It checks if the route requires authentication and if the user is authenticated.
 * If the route requires authentication and the user is not authenticated,
 * it redirects to the welcome page.
 *
 * @param to The route to navigate to
 * @param from The route the user is coming from
 * @param next The function to call to continue the navigation
 *
 * @returns The next route to navigate to
 */

router.beforeEach((to, from, next) => {
  // Get the user store for know if the user is authenticated
  const userStore = useStoreUser()

  // If the route requires authentication and the user is not authenticated,
  // redirect to the welcome page
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    return next({ name: 'welcome' })
  }

  // If the route does not require authentication and the user is authenticated,
  // redirect to the user home page
  return next()
})

export default router
