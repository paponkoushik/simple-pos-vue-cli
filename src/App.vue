<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/products" class="nav-item nav-link">Products</router-link>
            <router-link to="/add-products" class="nav-item nav-link">Add Product</router-link>
            <router-link to="/orders" class="nav-item nav-link">Orders</router-link>
          </div>
        </div>
      </nav>
    </div>

<!--    <img alt="Vue logo" src="./assets/logo.png">-->

<!--    <router-link to="/App">Go to Foo</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
