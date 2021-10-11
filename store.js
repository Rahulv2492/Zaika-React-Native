import React, { createContext, useReducer } from "react";
import { ADD_ITEM_TO_CART } from "./utils/constants";

const initialState = {
  cartItems: {},
};

const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      let cartItems = { ...state.cartItems };
      if (cartItems?.[action.payload.id]) {
        if (!action.payload.itemCount) {
          delete cartItems[action.payload.id];
        } else {
          cartItems[action.payload.id] = action.payload;
        }
      } else {
        cartItems = {
          ...cartItems,
          [action.payload.id]: action.payload,
        };
      }
      return { ...state, cartItems: { ...cartItems } };

    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
