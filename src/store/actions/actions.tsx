import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_TO_CART,
  TOGGLE_CART,
} from "../contants";

import { CartItem } from "../reducer/cartSlice";
export const addToCart = (product: CartItem) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: string) => ({
  type: REMOVE_TO_CART,
  payload: productId,
});

export const incrementItem = (productId: string) => ({
  type: INCREMENT,
  payload: productId,
});

export const decrementItem = (productId: string) => ({
  type: DECREMENT,
  payload: productId,
});
export const toggleCart = () => ({
  type: TOGGLE_CART,
});
