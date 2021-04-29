<template>
    <div class="container">
      <div class="mt-5">
        <div class="card">
          <div class="card-header text-center">Products</div>
          <div class="card-body">
            <div class="alert alert-success" role="alert" v-if="alert">
              {{alert}}
            </div>
            <table class="table">
              <thead>
              <tr>
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
                <td>{{product.name}}</td>
                <td>{{product.sku}}</td>
                <td>{{product.category}}</td>
                <td>{{product.description}}</td>
                <td>{{product.price}}</td>
                <td>{{product.image}}</td>
                <td>
                  <router-link :to="`/edit-products/${product.id}`" class="btn btn-outline-primary ml-2">Edit</router-link>
                  <button class="btn btn-outline-danger ml-2" @click.prevent="deleteProduct(product)">Delete</button>
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
      alert: ''
    }
  },

  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      axios.get(
          this.$apiUrl + 'products',
          {
            headers: this.$headerContent
          }
      ).then(({data}) =>{
        this.products = data;
      }).catch((errors)=>{
        console.log(errors)
      })
    },

    deleteProduct(product) {
      axios.post(
          this.$apiUrl + 'product/delete', {id: product.id},
          {
            headers: this.$headerContent
          }
      ).then(response => {
        this.alert = response.data;
        this.getProducts();

        setTimeout(() => {
          this.alert = '';
        }, 2500);

      }).catch(errors => {
        console.log(errors)
      })
    },
    editProduct(id) {
      console.log(id);
    }
  }
}
</script>

<style scoped>

</style>