import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: number;
  count: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as CartItem[],
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const newState = [...state.items];
      const uniqueState = newState.find(
        (item) => item.id === action.payload.id
      );

      if (!uniqueState) {
        newState.push({ ...action.payload, count: 1 });
      } else {
        uniqueState.count += 1;
      }
      state.items = newState;
    },
    removeFromCart: (state, action) => {
      const newState = [...state.items];
      const itemIndex = newState.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        newState.splice(itemIndex, 1);
      }
      state.items = newState;
    },
    increment: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.count += 1;
          return item;
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.items.map((item) => {
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

export default cartSlice.reducer;
