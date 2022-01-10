import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '../views/Category/AddCategory'
import About from '../views/About'
import Admin from '@/views/Admin'
import AddProduct from '@/views/Product/AddProduct'
import EditCategory from '@/views/Category/EditCategory'
import EditProduct from '@/views/Product/EditProduct'
import Category from '@/views/Category/Category'
import Product from '@/views/Product/Product'
import ShowDetails from '@/views/Product/ShowDetails'
import ListProducts from '@/views/Category/ListProducts'

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
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/category/details/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/product/details/:id',
    name: 'ShowDetails',
    component: ShowDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
