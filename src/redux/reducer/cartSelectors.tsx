import { RootState } from "../index";

export const selectProductsTotalPrice = (state: RootState) => {
  return state.item.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.quantity;
  }, 0);
};

export const selectItemCount = (state: RootState) => {
  return state.item.reduce((acc, currentItem) => {
    return acc + currentItem.count;
  }, 0);
};
