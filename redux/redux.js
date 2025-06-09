import { combineReducers, legacy_createStore } from "redux";
import data from "../src/assets/data";

export const addToCart = (options, quantity, id) => ({
  type: "addToCart",
  payload: { options, quantity, id },
});

export const removeFromCart = (id) => ({
  type: "removeFromCart",
  payload: { id },
});

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];

    case "removeFromCart":
      return state.filter((el) => el.id !== action.payload.id);

    default:
      return state;
  }
};

const menuReducer = (state = data.menu, action) => {
  return state;
};

const rootReducer = combineReducers({ cartReducer, menuReducer });

export const store = legacy_createStore(rootReducer);
