import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/employees',
    name: 'Employees',
    component: () => import('../views/Employees.vue')
  },
  {
    path: '/reviews/:id',
    name: 'Reviews',
    component: () => import('../views/Reviews.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
