<template>
  <div class="container">
    <div class="container">
      <div class="mt-5">
        <div class="card">
          <div class="card-header text-center">Add Product</div>
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
                <button class="btn btn-outline-primary" @click.prevent="save">Save</button>
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
  name: "AddProduct",
  data() {
    return {
      product: {
        name: '',
        sku: '',
        price: '',
        category_id: '',
        description: '',
        image: null,
      },
      categories: [],
      alert: '',
    }
  },
  created() {
    this.getCategories();
  },
  methods: {
    save() {
      console.log(this.product, 'product/store');
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
      axios.post(
          'http://localhost:8000/product/store',
          this.product,
          {
            headers: headers
          }
      ).then((res) =>{
        console.log(res);
        this.alert = res.data;
      }).catch((errors)=>{
        console.log(errors)
      })
    },
    addImage(item) {
      this.product.image = item.target.files[0];
    },
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
    }
  }
}
</script>

<style scoped>

</style>