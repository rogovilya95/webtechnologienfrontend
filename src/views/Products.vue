<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="product in products" :key="product.productId">
          <div class="col">
            <div class="card h-100px">
              <img :src="getProductImg(product)" class="card-img-top" :alt="product.productName">
              <div class="card-body">
                <h5 class="card-title">{{ product.productName }}</h5>
                <p class="card-text">{{ product.productDescription }}</p>
                <p class="card-text">{{ product.productPrice }}</p>
                <button type="button" class="btn btn-primary">Buy it!</button>
              </div>
            </div>
          </div>
<!--    <div class="col">-->
<!--      <div class="card h-100px">-->
<!--        <img src="../assets/41rQ3e7UIES._AC_SL1000_.jpg" class="card-img-top" alt="...">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">Smart Camera</h5>-->
<!--          <p class="card-text">Watch all</p>-->
<!--          <button type="button" class="btn btn-primary">Buy it!</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col">-->
<!--      <div class="card h-100px">-->
<!--        <img src="../assets/51lbDk+JULL._AC_SL1200_.jpg" class="card-img-top" alt="...">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">Smart Light</h5>-->
<!--          <p class="card-text">Adjust the light as you need it.</p>-->
<!--          <button type="button" class="btn btn-primary">Buy it!</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col">-->
<!--      <div class="card h-100px">-->
<!--        <img src="../assets/71s7auXNmOL._AC_SL1500_.jpg" class="card-img-top" alt="...">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">Smart Heating</h5>-->
<!--          <p class="card-text">Manage the temperature in your home</p>-->
<!--          <button type="button" class="btn btn-primary">Buy it!</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col">-->
<!--      <div class="card h-100px">-->
<!--        <img src="../assets/200928124425800701900075P.jpg" class="card-img-top" alt="...">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">Amazon Alexa</h5>-->
<!--          <p class="card-text">Connect all your smart devices into a smart system.</p>-->
<!--          <button type="button" class="btn btn-primary">Buy it!</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProductImg (product) {
      if (product.productId === 6) {
        return require('../assets/alexa.jpg')
      } else if (product.productId === 7) {
        return require('../assets/heating.jpg')
      } else if (product.productId === 8) {
        return require('../assets/camera.jpg')
      } else if (product.productId === 9) {
        return require('../assets/lamp.jpg')
      } else {
        return require('../assets/logo.png')
      }
    }
  },
  mounted () {
    console.log('Load successful')
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/products'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(product => {
        this.products.push(product)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>

</style>
