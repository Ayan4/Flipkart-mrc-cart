import React from "react";
import { useCart } from "../context/cart-context";
import CartCard from "../components/CartCard";
import TotalCard from "../components/TotalCard";

function Cart() {
  const { cartState } = useCart();

  if (cartState.cart.length < 1)
    return <p className="text-4xl m-16">Nothing in cart</p>;

  return (
    <div className="border w-4/5 mx-auto">
      <p className="text-left ml-2 text-lg my-3">
        {cartState.cart.length} Items in cart
      </p>
      <div className="flex">
        <div className="w-4/7">
          {cartState.cart.map(cartItem => (
            <CartCard key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="w-2/6">
          <TotalCard />
        </div>
      </div>
    </div>
  );
}

export default Cart;
