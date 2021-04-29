<template>
  <div class="container">
    <div class="alert alert-success" role="alert" v-if="alert">
      {{alert}}
    </div>
    <div class="row">
      <div class="col-md-6 mt-5">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <h5 class="card-title"> $ {{ product.price }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <a href="#" class="btn btn-primary" @click="selectProduct">Select</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-5">
        <div class="card">
          <div class="card-header text-center">Order</div>
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{selectedProduct.name}}</td>
                <td>{{selectedProduct.price}}</td>
              </tr>
              </tbody>
            </table>
            <button class="btn btn-outline-primary" @click.prevent="placeOrder">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PlaceOrder",
  data() {
    return {
      product: [],
      selectedProduct: [],
      alert: '',
    }
  },
  created() {
    this.getProduct();
  },
  methods: {
    placeOrder() {
      // let order = this.makeOrder();
      axios.post(
          this.$apiUrl + 'order/store',
          this.makeOrder(),
          {
            headers: this.$headerContent
          }
      ).then(response => {

        this.alert = response.data;

        setTimeout(() => {
          this.alert = '';
        }, 2000);

      }).catch(errors =>{
        console.log(errors)
      })
    },

    makeOrder() {
      return {
        status: 'processing',
        order_by: 2,/*order by login user*/
        product_id: this.selectedProduct.id,
        quantity: 1,
        total: this.selectedProduct.price,
      }
    },
    getProduct() {
      axios.post(this.$apiUrl + 'product/show', {id: 3}, {
        headers: this.$headerContent
      }).then(({data}) =>{
        this.product = data[0];
      }).catch((errors)=>{
        console.log(errors)
      })
    },

    selectProduct() {
      this.selectedProduct = this.product;
    },

  }
}
</script>

<style scoped>

</style>