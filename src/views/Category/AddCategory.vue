<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Name of category</label>
            <input type="text" class="form-control" v-model="categoryName" />
          </div>
          <div class="form-group">
            <label>Description of category</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>Link for an Image</label>
            <input type="text" class="form-control" v-model="imageUrl" />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Add new category
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
const sweetalert = require('sweetalert')
export default {
  data () {
    return {
      categoryName: '',
      description: '',
      imageUrl: ''
    }
  },
  methods: {
    addCategory () {
      console.log(this.categoryName, this.description)
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageUrl
      }
      const baseURL = process.env.VUE_APP_BACKEND_BASE_URL
      axios({
        method: 'post',
        url: `${baseURL}/api/categories`,
        data: JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          sweetalert({
            text: 'Category has been successfully added',
            icon: 'success'
          })
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  }
}
</script>
<style scoped></style>
