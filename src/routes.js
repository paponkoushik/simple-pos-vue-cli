
import App from "./App";
import Login from "./components/Auth/Login";
import Products from "./components/Products/Products";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";
import Orders from "./components/Order/Orders";
import EditOrder from "./components/Order/EditOrder";
import PlaceOrder from "./components/Order/PlaceOrder";

export const routes = [
    { path: '/', component: Login },
    { path: '/App', component: App },
    { path: '/products', component: Products },
    { path: '/add-products', component: AddProduct },
    { path: '/edit-products/:id', component: EditProduct },
    { path: '/orders', component: Orders },
    { path: '/edit-order/:id', component: EditOrder },
    { path: '/place-order', component: PlaceOrder },
]



