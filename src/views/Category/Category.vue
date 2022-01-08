<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">All Categories in our shop</h3>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="category in categories" :key="category.id">
        <div class="col">
          <div class="card h-100px">
            <img :src="category.imageUrl" class="card-img-top" :alt="category.categoryName">
            <div class="card-body">
              <h5 class="card-title">{{ category.categoryName }}</h5>
              <p class="card-text">{{ category.description }}</p>
              <button type="button" class="btn btn-primary">Have a look</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data () {
    return {
      categories: []
    }
  },
  methods: {
  },
  mounted () {
    console.log('Load successful')
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/categories'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(category => {
        this.categories.push(category)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
<style scoped></style>
