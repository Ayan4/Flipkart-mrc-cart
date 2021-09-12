import React, { useEffect, useState } from "react";
import { useCart } from "../context/cart-context";

function ProductCard(productItem) {
  const product = productItem.product;
  const { cartState, cartDispatch } = useCart();
  const [toggleButton, setToggleButton] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addToCartHandler = productItem => {
    cartDispatch({ type: "ADD", payload: productItem });
  };

  const increaseHandler = productID => {
    cartDispatch({ type: "INCREASE", payload: productID });
  };

  const decreaseHandler = (productID, quantity) => {
    if (quantity === 1) {
      removeHandler(productID);
      setToggleButton(false);
    } else {
      cartDispatch({ type: "DECREASE", payload: productID });
    }
  };

  const removeHandler = productID => {
    cartDispatch({ type: "REMOVE", payload: productID });
  };

  useEffect(() => {
    cartState.cart.find(
      item => item.id === product.id && setToggleButton(true)
    );
    const foundProduct = cartState.cart.find(item => item.id === product.id);
    setQuantity(foundProduct?.quantity);
  }, [cartState, product.id]);

  return (
    <div className="w-36 sm:w-72 text-left m-4">
      <img className="w-full" src={product.pic} alt="" />
      <p className="text-gray-600 font-semibold">{product.brand}</p>
      <p className="text-gray-900">{product.name}</p>
      <div className="flex justify-between border-t mt-1 pt-1">
        <p className="text-gray-900 font-semibold">Rs.{product.price}</p>
        <p>size: {product.size}</p>
      </div>
      <div>
        {!toggleButton ? (
          <button
            onClick={() => addToCartHandler(product)}
            className="w-full border-2 border-black mt-2 py-2"
          >
            Add To Cart
          </button>
        ) : (
          <div className="flex justify-center border mt-2">
            <button
              onClick={() => decreaseHandler(product.id, quantity)}
              className="border border-black px-2 mr-2"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => increaseHandler(product.id)}
              className="border border-black px-2 ml-2"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
