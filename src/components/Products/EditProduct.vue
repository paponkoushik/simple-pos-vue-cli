<template>
  <div class="container">
    <div class="container">
      <div class="mt-5">
        <div class="card">
          <div class="card-header text-center">Edit Product</div>
          <div class="card-body">
            <div class="alert alert-success" role="alert" v-if="alert">
              {{alert}}
            </div>
            <form>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="Product name" v-model="product.name">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">SKU</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="SKU" v-model="product.sku">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">price</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" placeholder="price" v-model="product.price">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Category</label>
                <div class="col-sm-10">
                  <select id="inputState" class="form-control" v-model="product.category_id">
                    <option value="" disabled selected>Choose one</option>
                    <option v-for="(category,index) in categories" :key="index" :value=category.id>{{ category.name }}</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <textarea type="text" class="form-control" placeholder="Description" v-model="product.description"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <input type="file" class="form-control-file" accept="image/*" placeholder="Description" @change="addImage" />
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-outline-primary" @click.prevent="updateProduct">Update</button>
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
  name: "EditProduct",
  data() {
    return {
      product: {},
      categories: [],
      alert: '',
    }
  },
  created() {
    this.getCategories();
    this.getProduct();
  },
  methods: {
    getCategories() {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
      axios.get(
          'http://localhost:8000/categories',
          {
            headers: headers
          }
      ).then(({data}) =>{
        this.categories = data;
      }).catch((errors)=>{
        console.log(errors)
      })
    },
    updateProduct() {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
      axios.post('http://localhost:8000/product/update', this.product, {
        headers: headers
      }).then(({data}) =>{
        this.alert = data;
        setTimeout(() => {
          this.alert = '';
        }, 2000);
      }).catch((errors)=>{
        console.log(errors)
      })
    },
    getProduct() {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
      axios.post('http://localhost:8000/product/show', {id: this.$route.params.id}, {
        headers: headers
      }).then(({data}) =>{
        this.product = data[0];
        console.log(this.product)
      }).catch((errors)=>{
        console.log(errors)
      })
    },

    addImage(item) {
      this.product.image = item.target.files[0];
    },
  }
}
</script>

<style scoped>

</style>