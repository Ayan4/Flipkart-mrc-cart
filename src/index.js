import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/cart-context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
