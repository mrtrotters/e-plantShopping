import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity++; //if item exists in cart already, up the quantity.
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // if the item does not exist in the array/cart, add it and make its quantity 1.
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
      
      const itemToUpdate = state.items.find((item) => item.name === name);// Find the item in the cart that matches the given name
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
      }
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
