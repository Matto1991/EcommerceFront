import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const { product } = action.payload;
      console.log(current(state), product);

      const existingProduct = state.find(
        (currentProduct) => currentProduct.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      return state;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
