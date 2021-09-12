import "./App.css";
import ProductListing from "./routes/ProductListing";
import Navbar from "./components/Navbar";
import Cart from "./routes/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<ProductListing />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
