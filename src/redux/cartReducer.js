import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    addToCart(state, action) {
      const { product } = action.payload;

      const productInCart = state.products.find(
        (item) => item.id === product.id
      );

      productInCart
        ? (productInCart.quantity += 1)
        : state.products.push({ ...product, quantity: 1 });
    },

    removeFromCart(state, action) {
      return state;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
