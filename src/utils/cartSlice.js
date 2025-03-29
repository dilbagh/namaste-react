import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    restaurant: {},
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log({
        state: { items: [...state.items], restaurant: { ...state.restaurant } },
        action,
      });
      if (action.payload.restaurantId !== state.restaurant.id) {
        state.items.length = 0;
        state.restaurant.id = action.payload.restaurantId;
      }
      state.items.push(action.payload.item);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.itemId
      );
      if (index !== -1) {
        state.items.removeItem(index);
      }
    },
    clear: (state) => {
      state.restaurant.id = undefined;
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;
