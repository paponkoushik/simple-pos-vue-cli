<template>
  <div class="container">
    <div class="mt-5">
      <div class="card">
        <div class="card-header text-center">Login</div>
        <div class="card-body">
          <form>
            <div class="form-group row align-items-center">
              <label class="col-sm-2 mb-0">Email</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" v-model="user.email" required>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-sm-2 mb-0">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" v-model="user.password" required>
              </div>
            </div>
          </form>
          <button class="btn btn-outline-primary float-md-right"
                  type="submit"
                  @click.prevent="save">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      user: {},
    }
  },
  methods: {
    save() {
      axios.get(
          this.$apiUrl + 'products',
          {
            headers: this.$headerContent
          }
      ).then(res =>{
        console.log(res);
      }).catch((errors)=>{
        console.log(errors)
      })
    }
  }
}
</script>

<style scoped>

</style>