<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            <a href="#start-shopping" class="bg-white px-2 py-2 rounded">Start to shopping</a> </h3>
          <p class="lead mb-0 bg-dark p-1 rounded">SmartHome</p>
        </header>
      </div>
      <hr />
    </div>

    <!--    display categories-->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Best Categories</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in this.categorySize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <CategoryCard :category="categories[index-1]" />
        </div>
      </div>
    </div>
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top of Products</h2>
        </div>
      </div>

      <!--      display products-->

      <div class="row">
        <div v-for="index in this.productSize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductCard :product="products[index-1]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from '../components/Category/CategoryCard'
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'Home',
  components: { CategoryCard, ProductCard },
  props: ['categories', 'products'],
  data () {
    return {
      categorySize: 0,
      productSize: 0
    }
  },
  mounted () {
    this.categorySize = Math.min(6, this.categories.length)
    this.productSize = Math.min(8, this.products.length)
  }
}
</script>
<style>
.page-holder {
  min-height: 100vh;
}
.bg-cover{
  background-size: cover !important;
}
#background-div {
  background: url("../assets/ihaus_all_in_one_smart_home_app_midres.jpg");
}
#heading {
  font-weight: 400;
}
</style>
