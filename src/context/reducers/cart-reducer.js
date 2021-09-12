export const initialState = {
  cart: [],
  saved: []
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const foundProduct = state.cart.find(
        item => item.id === action.payload.id
      );
      const newItem = { ...action.payload, quantity: 1 };
      return {
        ...state,
        cart: foundProduct ? state.cart : [...state.cart, newItem]
      };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "ADD_SAVED":
      const foundSavedProduct = state.saved.find(
        item => item.id === action.payload.id
      );
      return {
        ...state,
        saved: foundSavedProduct
          ? state.saved
          : [...state.saved, action.payload]
      };

    case "REMOVE_SAVED":
      return {
        ...state,
        saved: state.saved.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};
