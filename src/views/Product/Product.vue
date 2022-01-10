<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3> Our Products</h3>
        <router-link :to="{ name: 'AddProduct' }">
          <button class="btn" style="float: right">Add Product</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div v-for="product of products"
           :key="product.id"
           class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
        <ProductCard :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard'
export default {
  components: { ProductCard },
  props: ['products']
}
</script>
