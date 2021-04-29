<template>
  <div class="container">
    <div class="container">
      <div class="mt-5">
        <div class="card">
          <div class="card-header text-center">Edit Order</div>
          <div class="card-body">
            <div class="alert alert-success" role="alert" v-if="alert">
              {{alert}}
            </div>
            <form>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Status</label>
                <div class="col-sm-10">
                  <select id="inputState" class="form-control" v-model="order.status">
                    <option value="" disabled selected>Choose one</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-outline-primary" @click.prevent="updateOrder">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditOrder",
  data() {
    return {
      order: [],
      alert: '',
    }
  },
  created() {
    this.getOrder();
  },

  methods: {
    getOrder() {
      axios.post(this.$apiUrl + 'order/show', {id: this.$route.params.id}, {
        headers: this.$headerContent
      }).then(({data}) =>{
        this.order = data[0];
      }).catch((errors)=>{
        console.log(errors)
      })
    },
    updateOrder() {
      axios.post(this.$apiUrl + 'order/update', {id: this.order.id, status: this.order.status}, {
        headers: this.$headerContent
      }).then(({data}) =>{
        this.alert = data;
        setTimeout(() => {
          this.alert = '';
          this.$router.push('/orders');
        }, 2000);
      }).catch((errors)=>{
        console.log(errors)
      })
    }
  }
}
</script>

<style scoped>

</style>