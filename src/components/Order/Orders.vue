<template>
  <div class="container">
    <div class="mt-5">
      <div class="card">
        <div class="card-header text-center">Orders</div>
        <div class="card-body">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody  v-if="orders.length">
            <tr v-for="(order,index) in orders" :key="index">
              <td>{{order.status.charAt(0).toUpperCase() + order.status.slice(1)}}</td>
              <td>{{order.quantity}}</td>
              <td>{{order.total}}</td>
              <td>
                <router-link :to="`/edit-order/${order.id}`" class="btn btn-outline-primary ml-2">Edit</router-link>
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
  name: "Order",
  data() {
    return {
      orders: [],
    }
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      axios.get(
          this.$apiUrl + 'orders',
          {
            headers: this.$headerContent
          }
      ).then(({data}) =>{
        this.orders = data;
      }).catch((errors)=>{
        console.log(errors)
      })
    }
  }
 }
</script>

<style scoped>

</style>