import { createSlice } from "@reduxjs/toolkit";
import { Zoom, toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    addToCart(state, action) {
      const { product } = action.payload;
      const productInCart = state.products.find(
        (item) => item.id === product.id
      );

      if (productInCart && productInCart.quantity >= product.stock) {
        return;
      }

      productInCart
        ? (productInCart.quantity += 1)
        : state.products.push({ ...product, quantity: 1 });
    },

    decreaseCart(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product.quantity > 1) product.quantity -= 1;
    },

    increaseCart(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (product.quantity >= product.stock) {
        toast.error("Not enough stock available", {
          position: "top-center",
          transition: Zoom,
        });
        return state;
      }

      product.quantity += 1;

      return state;
    },

    removeFromCart(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },

    resetCart(state, action) {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
