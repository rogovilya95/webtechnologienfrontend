<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Smart-Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/products">Products</router-link>
          <router-link class="nav-link" to="/about">About us</router-link>
          <router-link class="nav-link" to="/paymentsanddelivery">Payments and delivery</router-link>
          <router-link class="nav-link" to="/myaccount">My account</router-link>
<!--          <a class="nav-link active" aria-current="page" href="#">Home</a>-->
<!--          <a class="nav-link" href="#">Products</a>-->
<!--          <a class="nav-link" href="#">About us</a>-->
<!--          <a class="nav-link" href="#">Payment and delivery</a>-->
<!--          <a class="nav-link" href="#">My account</a>-->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
