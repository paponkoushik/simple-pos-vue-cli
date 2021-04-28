
import App from "./App";
import Login from "./components/Auth/Login";
import Products from "./components/Products/Products";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";

export const routes = [
    { path: '/App', component: App },
    { path: '/login', component: Login },
    { path: '/products', component: Products },
    { path: '/add-products', component: AddProduct },
    { path: '/edit-products/:id', component: EditProduct },
]



