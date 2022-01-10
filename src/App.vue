<template>
  <Navbar />
  <router-view v-if="categories && products"
               :baseURL="baseURL"
               :categories="categories"
               :products="products"
               @fetchData="fetchData"
  >
  </router-view>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from '@/components/Footer'
import axios from 'axios'
export default {
  components: { Navbar, Footer },
  data () {
    return {
      baseURL: 'https://smarthomewebtech.herokuapp.com',
      products: null,
      categories: null
    }
  },
  methods: {
    async fetchData () {
      // api call to get all the categories
      await axios
        .get(this.baseURL + '/api/categories')
        .then((res) => {
          this.categories = res.data
        })
        .catch((err) => console.log('err', err))
      // api call to get the products
      await axios
        .get(this.baseURL + '/api/products')
        .then((res) => {
          this.products = res.data
        }).catch((err) => console.log('err', err))
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
