import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_TO_CART } from "../contants";

export const addToCart = (product: object) => ({
  type: ADD_TO_CART,
  data: product,
});

export const removeFromCart = (product: object) => ({
  type: REMOVE_TO_CART,
  data: product,
});

export const incrementItem = (product: object) => ({
  type: INCREMENT,
  data: product,
});

export const decrementItem = (product: object) => ({
  type: DECREMENT,
  data: product,
});
