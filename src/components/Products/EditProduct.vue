<template>
  <div class="container">
    <div class="mt-5">
      <div class="card">
        <div class="card-header text-center">Edit Product</div>
        <div class="card-body">
          <div class="mb-2" v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
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
              <button class="btn btn-outline-primary" @click.prevent="validateProduct">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {formDataAssigner} from "../Helpers/helpers";

export default {
  name: "EditProduct",
  data() {
    return {
      product: {},
      categories: [],
      alert: '',
      image: '',
      errors: [],
    }
  },
  created() {
    this.getCategories();
    this.getProduct();
  },
  methods: {
    validateProduct() {
      if (!this.product.name) {
        this.errors.push("Product name is required.");
      } else if (!this.product.sku) {
        this.errors.push("Product SKU is required");
      } else if (!this.product.price) {
        this.errors.push("Product Price is required")
      } else if (!this.product.category_id) {
        this.errors.push("Category is required")
      } else {
        this.updateProduct();
      }
    },
    updateProduct() {
      let formData = formDataAssigner(new FormData, this.product);

      if (this.image) {
        formData.append('new_image', this.image)
      }

      axios.post(this.$apiUrl + 'product/update', formData, {
        headers: this.$headerFileContent
      }).then(({data}) =>{
        this.alert = data;
        setTimeout(() => {
          this.alert = '';
          this.$router.push('/products');
        }, 2000);
      }).catch((errors)=>{
        console.log(errors)
      })
    },
    getProduct() {
      axios.post(this.$apiUrl + 'product/show', {id: this.$route.params.id}, {
        headers: this.$headerContent
      }).then(({data}) =>{
        this.product = data[0];
      }).catch((errors)=>{
        console.log(errors)
      })
    },
    getCategories() {
      axios.get(
          this.$apiUrl + 'categories',
          {
            headers: this.$headerContent
          }
      ).then(({data}) =>{
        this.categories = data;
      }).catch((errors)=>{
        console.log(errors)
      })
    },

    addImage(item) {
      this.image = item.target.files[0];
    },
  }
}
</script>