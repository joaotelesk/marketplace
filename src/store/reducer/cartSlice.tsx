import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  count: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action) => {
      const newState = [...state, action.payload];
      const uniqueState = newState.filter(
        (item, index) => newState.indexOf(item) === index
      );
      state.splice(0, state.length, ...uniqueState);
    },
    removeFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      return state;
    },
    increment: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.count += 1;
          return item;
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.count = item.count > 1 ? item.count - 1 : 1;
          return item;
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
