import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AdminProduct from "./pages/AdminProduct";
import AdminUser from "./pages/AdminUser";
import AdminOrder from "./pages/AdminOrder";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import AboutProyect from "./components/AboutProyect";
import AdminProfile from "./pages/AdminProfile";
import AdminOwnOrder from "./pages/AdminOwnOrder";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Products from "./components/Products";
import Login from "./pages/Login";
import SingUp from "./pages/SignUp";
import CheckOut from "./components/CheckOut";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about" element={<AboutProyect />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/orders" element={<AdminOwnOrder />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<AdminProduct />} />
        <Route path="/admin/users" element={<AdminUser />} />
        <Route path="/admin/orders" element={<AdminOrder />} />
        <Route path="admin/edit/product/:id" element={<EditProduct />} />

        <Route path="*" element={<h2>There's nothing here: 404!</h2>} />
      </Routes>
    </div>
  );
}

export default App;
