<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float:right">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
        <CategoryCard :category="category"></CategoryCard>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryCard from '@/components/Category/CategoryCard'

export default {
  name: 'Category',
  props: ['categories'],
  components: { CategoryCard },
  data () {
    return {
      baseURL: 'https://smarthomewebtech.herokuapp.com'
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style scoped></style>
