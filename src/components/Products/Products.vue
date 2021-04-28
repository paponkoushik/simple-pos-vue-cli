<template>
    <div class="container">
      <div class="mt-5">
        <div class="card">
          <div class="card-header text-center">Products</div>
          <div class="card-body">
            <table class="table">
              <thead>
              <tr>
                <th scope="col">Sl</th>
                <th scope="col">Name</th>
                <th scope="col">SKU</th>
                <th scope="col">Category</th>
                <th scope="col">description</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody  v-if="products.length">
              <tr v-for="(product,index) in products" :key="index">
                <td scope="row">1</td>
                <td>{{product.name}}</td>
                <td>{{product.sku}}</td>
                <td>{{product.category}}</td>
                <td>{{product.description}}</td>
                <td>{{product.price}}</td>
                <td>{{product.image}}</td>
                <td>
                  <button class="btn btn-outline-primary ml-2">Edit</button>
                  <button class="btn btn-outline-danger ml-2">Delete</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Products",
  data() {
    return {
      products: [],
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
      axios.get(
          'http://localhost:8000/products',
          {
            headers: headers
          }
      ).then(({data}) =>{

        this.products = data;
        console.log(this.products)
      }).catch((errors)=>{
        console.log(errors)
      })
    }
  }
}
</script>

<style scoped>

</style>