import Vue from 'vue'
import App from "./App";
import {routes} from "./routes"
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.prototype.$headerContent = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
};
Vue.prototype.$apiUrl = "http://localhost:8000/";

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
