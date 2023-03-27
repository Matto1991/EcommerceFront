import Home from "./pages/Home";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/storeConfig";
import { Routes, Route } from "react-router-dom";
// import AdminHome from "./components/AdminHome";

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
import Navbar from "./components/Navbar";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/admin/users" element={<AdminUser />} />
          <Route path="/admin/orders" element={<AdminOrder />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<AboutProyect />} />
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/orders" element={<AdminOwnOrder />} />
          <Route path="*" element={<h2>There's nothing here: 404!</h2>} />
        </Routes>
      </div>
    </PersistGate>
  );
}

export default App;
