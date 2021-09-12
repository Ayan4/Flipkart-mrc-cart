import { createContext, useContext, useReducer } from "react";
import { initialState, cartReducer } from "./reducers/cart-reducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartDispatch, cartState }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
