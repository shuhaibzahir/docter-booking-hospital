import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/hospital/login',
    name: 'hospital-login',
    component: () => import('../views/HospitalLogin.vue')
  },
  {
    path: '/hospital/register',
    name: 'hospital-signup',
    component: () => import('../views/HospitalSignup.vue')
  },
  {
    path: '/add/doctor',
    name: 'add-doctor',
    component: () => import('../views/AddDoctor.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
