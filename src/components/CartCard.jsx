import React from "react";
import { useCart } from "../context/cart-context";

function CartCard({ cartItem }) {
  const { cartDispatch } = useCart();

  const increaseHandler = productID => {
    cartDispatch({ type: "INCREASE", payload: productID });
  };

  const decreaseHandler = (productID, quantity) => {
    if (quantity === 1) {
      removeHandler(productID);
    } else {
      cartDispatch({ type: "DECREASE", payload: productID });
    }
  };

  const removeHandler = productID => {
    cartDispatch({ type: "REMOVE", payload: productID });
  };

  const saveHandler = product => {
    cartDispatch({ type: "ADD_SAVED", payload: product });
    removeHandler(product.id);
  };

  return (
    <div className="flex border border-black m-2">
      <img className="w-1/5" src={cartItem.pic} alt="" />
      <div className="flex flex-col items-start ml-4">
        <p className="text-lg">{cartItem.name}</p>
        <p className="font-semibold text-gray-700">{cartItem.brand}</p>
        <p className="border border-black mt-2 w-6 h-6 text-xs font-semibold flex justify-center items-center rounded-full">
          {cartItem.size}
        </p>
        <p className="font-semibold text-gray-900 mt-2">₹{cartItem.price}</p>

        <div className="flex justify-center border p-0.5 mt-2">
          <p className="pr-2">Qty : </p>
          <button
            onClick={() => decreaseHandler(cartItem.id, cartItem.quantity)}
            className="border border-black px-2 mr-2"
          >
            -
          </button>
          <p>{cartItem.quantity}</p>
          <button
            onClick={() => increaseHandler(cartItem.id)}
            className="border border-black px-2 ml-2"
          >
            +
          </button>
        </div>

        <div className="mt-3.5">
          <button
            onClick={() => removeHandler(cartItem.id)}
            className="px-2 border border-gray-400 bg-gray-200 rounded mr-2"
          >
            Remove
          </button>
          <button
            onClick={() => saveHandler(cartItem)}
            className="px-2 border border-gray-400 bg-gray-200 rounded ml-2"
          >
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
