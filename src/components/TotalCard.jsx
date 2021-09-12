import React from "react";
import { useCart } from "../context/cart-context";

function TotalCard() {
  const { cartState } = useCart();

  const total = cartState.cart.map(item => item.price * item.quantity);
  const discount = cartState.cart.map(item => item.discount);

  const cartTotal = total.reduce((a, b) => a + b, 0);
  const discountTotal = discount.reduce((a, b) => a + b, 0);

  const grandTotal = cartTotal - discountTotal;

  return (
    <div className="p-2 m-2 border border-black">
      <div className="flex justify-between text-lg text-gray-700">
        <p>Cart Total : </p>
        <p>₹ {cartTotal}</p>
      </div>
      <div className="flex justify-between text-green-700 font-semibold text-sm mt-2">
        <p>Discounts </p>
        <p>- {discountTotal}</p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between text-xl">
        <p>Grand Total </p>
        <p>₹ {grandTotal} /-</p>
      </div>
    </div>
  );
}

export default TotalCard;
