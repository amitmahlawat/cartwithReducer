import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0,changed:false },
  reducers: {
    replaceCart(state,action){
      state.totalQuantity=action.payload.totalQuantity;
      state.items=action.payload.items
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed=true;
      if (!existingItem) {
        state.items.push(newItem);
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        state.totalQuantity++;
      }
    },
    removeItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
        state.totalQuantity--;
        state.changed=true;
      } else {
        existingItem.quantity--;
        state.totalQuantity--;
      }
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice;
