<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Add Category</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="categoryName" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input type="text" class="form-control" v-model="imageUrl" />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Create new category
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
      categoryName: null,
      description: null,
      imageURL: null
    }
  },
  methods: {
    async addCategory () {
      console.log(this.categoryName, this.description)
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageURL
      }
      const baseURL = 'https://smarthomewebtech.herokuapp.com'
      await axios({
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
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped></style>
