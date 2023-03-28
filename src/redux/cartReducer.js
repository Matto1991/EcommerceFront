import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartProducts: [] },
  reducers: {
    addToCart(state, action) {
      const { product } = action.payload;
      console.log(action.payload);

      const existingProduct = state.cartProducts.find(
        (currentProduct) => currentProduct.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartProducts.push({ ...product, quantity: 1 });
      }
      state.cart.push(action.payload);
    },

    // removeFromCart(state, action) {
    //   return state;
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
