import Home from "./pages/Home";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/storeConfig";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prueba" element={<Cart />} />
        </Routes>
      </div>
    </PersistGate>
  );
}

export default App;
