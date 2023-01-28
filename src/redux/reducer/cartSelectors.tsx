import { RootState } from "../index";

export const selectProductsTotalPrice = (state: RootState) => {
  return state.item.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.count;
  }, 0);
};

export const selectItemQuantity = (state: RootState) => {
  return state.item.reduce((acc, currentItem) => {
    return acc + currentItem.quantity;
  }, 0);
};
