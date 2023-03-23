import Home from "./pages/Home";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/storeConfig";
import { Routes, Route } from "react-router-dom";
// import AdminHome from "./components/AdminHome";
// import Example from "./components/Cart";
import Cart from "./components/Cart";
import Dashboard from "./pages/Dashboard";
import AdminProduct from "./pages/AdminProduct";
import AdminUser from "./pages/AdminUser";
import AdminOrder from "./pages/AdminOrder";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import AboutProyect from "./components/AboutProyect";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Routes>
          {/* <Route path="/prueba" element={<Navbar />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/prueba" element={<Cart />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/admin/users" element={<AdminUser />} />
          <Route path="/admin/orders" element={<AdminOrder />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-this-proyect" element={<AboutProyect />} />
        </Routes>
      </div>
    </PersistGate>
  );
}

export default App;
