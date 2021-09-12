import React from "react";
import { useCart } from "../context/cart-context";
import CartCard from "../components/CartCard";
import TotalCard from "../components/TotalCard";
import SavedCard from "../components/SavedCard";

function Cart() {
  const { cartState } = useCart();

  return (
    <div className="border w-4/5 mx-auto">
      <p className="text-left text-xl my-3 w-full bg-blue-500 p-2 text-white">
        Cart : {cartState.cart.length} items
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="w-4/7 border border-gray-300 h-96 mb-4 relative overflow-y-scroll">
            {cartState.cart.map(cartItem => (
              <CartCard key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          <div>
            <p className="text-left w-full bg-blue-500 p-2 text-white text-xl mb-3">
              Saved Products : {cartState.saved.length} items
            </p>
            <div className="w-4/7 border border-gray-300 h-96 mb-4 relative overflow-y-scroll">
              {cartState.saved.map(savedItem => (
                <SavedCard key={savedItem.id} savedItem={savedItem} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/6">
          <TotalCard />
        </div>
      </div>
    </div>
  );
}

export default Cart;
