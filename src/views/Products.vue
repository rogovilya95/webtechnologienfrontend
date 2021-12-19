<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card h-100px">
        <img src="../assets/41rQ3e7UIES._AC_SL1000_.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Smart Camera</h5>
          <p class="card-text">Watch all</p>
          <button type="button" class="btn btn-primary">Buy it!</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100px">
        <img src="../assets/51lbDk+JULL._AC_SL1200_.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Smart Light</h5>
          <p class="card-text">Adjust the light as you need it.</p>
          <button type="button" class="btn btn-primary">Buy it!</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100px">
        <img src="../assets/71s7auXNmOL._AC_SL1500_.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Smart Heating</h5>
          <p class="card-text">Manage the temperature in your home</p>
          <button type="button" class="btn btn-primary">Buy it!</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100px">
        <img src="../assets/200928124425800701900075P.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Amazon Alexa</h5>
          <p class="card-text">Connect all your smart devices into a smart system.</p>
          <button type="button" class="btn btn-primary">Buy it!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: [
        {
          id: 1,
          productName: 'Amazon Alexa',
          productDescription: 'Connect all your smart devices into a smart system.',
          productPrice: '20',
          categoryId: [
            '',
            2
          ]
        },
        {
          id: 2,
          productName: 'Smart Heating',
          productDescription: 'Manage the temperature in your home',
          productPrice: '30',
          categoryId: []
        },
        {
          id: 3,
          productName: 'Smart Camera',
          productDescription: 'Watch all',
          productPrice: '40',
          categoryId: [
            1,
            2
          ]
        },
        {
          id: 4,
          productName: 'Smart Light',
          productDescription: 'Adjust the light as you need it.',
          productPrice: '50',
          categoryId: [
            1,
            2
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
