import { createSlice } from "@reduxjs/toolkit";

import { ICartItem } from "@/src/types/ICartItem";

import { RootState } from "..";

type InitialState = {
  isOpen: boolean;
  item: ICartItem[];
};

const initialState: InitialState = {
  isOpen: false,
  item: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload as ICartItem;
      // procura se o item já existe no array de itens
      const existingItem = state.item.find((item) => item.id === newItem.id);
      if (existingItem) {
        // se existir, devolve o estado como estava
        return state;
      } else {
        // se não existir, adiciona o item ao array
        state.item.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      const newState = [...state.item];
      const itemIndex = newState.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        newState.splice(itemIndex, 1);
      }
      state.item = newState;
    },
    increment: (state, action) => {
      state.item.map((item) => {
        if (item.id === action.payload.id) {
          item.count += 1;
          return item;
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.item.map((item) => {
        if (item.id === action.payload.id) {
          item.count = item.count > 1 ? item.count - 1 : 1;

          return item;
        }
        return item;
      });
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement, toggleCart } =
  cartSlice.actions;

export const selectIsVisible = (state: RootState) => state.isOpen;
export const selectItem = (state: RootState) => state.item;
export default cartSlice.reducer;
