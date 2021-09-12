import React from "react";
import { useCart } from "../context/cart-context";

function SavedCard({ savedItem }) {
  const { cartDispatch } = useCart();

  const addToCartHandler = productItem => {
    cartDispatch({ type: "ADD", payload: productItem });
    removeHandler(productItem.id);
  };

  const removeHandler = productID => {
    cartDispatch({ type: "REMOVE_SAVED", payload: productID });
  };

  return (
    <div className="flex border border-black m-2">
      <img className="w-1/5" src={savedItem.pic} alt="" />
      <div className="flex flex-col items-start ml-4">
        <p className="text-lg">{savedItem.name}</p>
        <p className="font-semibold text-gray-700">{savedItem.brand}</p>
        <p className="border border-black mt-2 w-6 h-6 text-xs font-semibold flex justify-center items-center rounded-full">
          {savedItem.size}
        </p>
        <p className="font-semibold text-gray-900 mt-2">₹{savedItem.price}</p>

        <div className="mt-10">
          <button
            onClick={() => removeHandler(savedItem.id)}
            className="px-2 border border-gray-400 bg-gray-200 rounded mr-2"
          >
            Remove
          </button>
          <button
            onClick={() => addToCartHandler(savedItem)}
            className="px-2 border border-gray-400 bg-gray-200 rounded ml-2"
          >
            Move To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavedCard;
