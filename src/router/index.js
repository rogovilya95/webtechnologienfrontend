import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import PaymentAndDelivery from '../views/PaymentsAndDelivery.vue'
import MyAccount from '../views/MyAccount.vue'
import AddCategory from '@/views/Category/AddCategory'
import Category from '@/views/Category/Category'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/paymentsanddelivery',
    name: 'PaymentAndDelivery',
    component: PaymentAndDelivery
  },
  {
    path: '/MyAccount',
    name: 'My account',
    component: MyAccount
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'actual',
  routes
})

export default router
