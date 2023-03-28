import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], cartTotalQuantity: 0 },
  reducers: {
    addToCart(state, action) {
      const { product } = action.payload;
      const productInCart = state.products.find(
        (item) => item.id === product.id
      );

      productInCart
        ? (productInCart.quantity += 1)
        : state.products.push({ ...product, quantity: 1, });
        
    },
    decreaseCart(state, action) {
      const productIndex = state.products.findIndex(product => product.id === action.payload.id)
      if(state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity -= 1;

      } else if (state.products[productIndex].quantity === 1) {
        const newQuantityProducts = state.products.filter((product) => product.id !== action.payload.id)
        state.products = newQuantityProducts
      }
    },
    increaseCart(state, action) {
      const productIndex = state.products.findIndex(product => product.id === action.payload.id)
      if(state.products[productIndex].quantity >= 1) {
        state.products[productIndex].quantity += 1;

      } else if (state.products[productIndex].quantity === 1) {
        const newQuantityProducts = state.products.filter((product) => product.id !== action.payload.id)
        state.products = newQuantityProducts
      }
    },
    removeFromCart(state, action) {
        const updatedCart = state.products.filter((product) => product.id !== action.payload.id)
        state.products = updatedCart;
      },
  },
});

export const { addToCart, removeFromCart, decreaseCart, increaseCart } = cartSlice.actions;
export default cartSlice.reducer;
