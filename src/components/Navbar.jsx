import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex px-8 sm:px-8 justify-between bg-blue-700 py-4">
      <Link to="/" className="text-yellow-400 text-2xl font-semibold">
        FlixCart
      </Link>
      <Link className="border-b-2 border-white text-white" to="cart">
        Cart
      </Link>
    </div>
  );
}

export default Navbar;
