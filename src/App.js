import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProtectedRouter from "./components/UserProtectedRouter";

//Users
import SignIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import AboutProject from "./pages/AboutProject";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Products from "./pages/Products";

import CheckOut from "./pages/CheckOut";

//Admins
import SignInAdmin from "./pages/SignInAdmin";
import Dashboard from "./pages/Dashboard";

import AdminProduct from "./pages/AdminProduct";
import EditProduct from "./pages/EditProduct";
import AdminOrder from "./pages/AdminOrder";
import AdminUser from "./pages/AdminUser";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import EditAdmin from "./pages/EditAdmin";
import CreateCategory from "./pages/CreateCategory";
import AdminCategories from "./pages/AdminCategories";
import EditCategory from "./pages/EditCategory";
import CreateProduct from "./pages/CreateProduct";
import Error from "./pages/Error";
import PurchaseOrder from "./pages/Thanks";
import Information from "./components/Information";
import UserOrders from "./pages/UserOrders";
import UserOrderDetails from "./pages/UserOrderDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Users */}
        <Route path="/prueba" element={<Information />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/project/details" element={<AboutProject />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/login/admin" element={<SignInAdmin />} />

        {/* Rutas protegidas */}
        <Route element={<UserProtectedRouter redirectTo="/login" />}>
          <Route path="/thanks" element={<PurchaseOrder />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orders" element={<UserOrders />} />
          <Route path="/orders/details/:id" element={<UserOrderDetails />} />
        </Route>
        {/* Admins */}
        <Route
          element={
            <ProtectedRoute
              path="/admin"
              element={<Dashboard />}
              redirectTo="/"
            />
          }
        >
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="admin/edit/product/:id" element={<EditProduct />} />
          <Route path="/admin/users" element={<AdminUser />} />
          <Route path="/admin/create/user" element={<CreateUser />} />
          <Route path="/admin/edit/user/:id" element={<EditUser />} />
          <Route path="/admin/edit/admin/:id" element={<EditAdmin />} />
          <Route path="/admin/orders" element={<AdminOrder />} />
          <Route path="/admin/create/product" element={<CreateProduct />} />
          <Route path="admin/edit/product/:id" element={<EditProduct />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/create/category" element={<CreateCategory />} />
          <Route path="/admin/edit/category/:id" element={<EditCategory />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
