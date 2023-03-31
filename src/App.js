import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";

//Users
import SignIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import AboutProyect from "./components/AboutProyect";
import Category from "./components/Category";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./components/Cart";
import CheckOut from "./pages/CheckOut";

//Admins
import SignInAdmin from "./pages/SignInAdmin";
import Dashboard from "./pages/Dashboard";
import AdminProfile from "./pages/AdminProfile";
import AdminProduct from "./pages/AdminProduct";
import EditProduct from "./pages/EditProduct";
import AdminOrder from "./pages/AdminOrder";
import AdminOwnOrder from "./pages/AdminOwnOrder";
import AdminUser from "./pages/AdminUser";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import EditAdmin from "./pages/EditAdmin";
import CreateCategory from "./pages/CreateCategory";
import AdminCategories from "./pages/AdminCategories";
import EditCategory from "./pages/EditCategory";
import CreateProduct from "./pages/CreateProduct";
import Error from "./pages/Error";
import PurchaseOrder from "./pages/PurchaseOrder";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Users */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/project-details" element={<AboutProyect />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/login" element={<SignIn />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/thanks" element={<PurchaseOrder />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/checkout" element={<CheckOut />} />
        {/* Admins */}
        <Route path="/login-admin" element={<SignInAdmin />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/admin/products" element={<AdminProduct />} />
        <Route path="admin/edit/product/:id" element={<EditProduct />} />
        <Route path="/admin/users" element={<AdminUser />} />
        <Route path="/admin/create/user" element={<CreateUser />} />
        <Route path="/admin/edit/user/:id" element={<EditUser />} />
        <Route path="/admin/edit/admin/:id" element={<EditAdmin />} />
        <Route path="/admin/orders" element={<AdminOrder />} />
        <Route path="/orders" element={<AdminOwnOrder />} />
        <Route path="/admin/create/product" element={<CreateProduct />} />
        <Route path="admin/edit/product/:id" element={<EditProduct />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/createCategory" element={<CreateCategory />} />
        <Route path="/admin/editCategory/:id" element={<EditCategory />} />
        {/* </Route> */}

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
