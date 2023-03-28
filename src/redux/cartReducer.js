import { createSlice, current } from "@reduxjs/toolkit";
import Product from "../components/Product";

const cartSlice = createSlice({
  name: "cart",
  initialState: {cart:[]},

  reducers: {
    addToCart(state, action) {
      const {id} = action.payload
      const updateCart = state.cart((product) => product.id === id)
      updateCart.cart.push(action.payload)
    console.log(id)
    console.log(current(state))
    // const foundIndexProduct = state.cart.findIndex((item) => id === item.id)
    // console.log(foundIndexProduct)

      // if(foundIndexProduct !== -1) {
      //   state.products[foundIndexProduct].quantity ++; 
      // } else {
      //   state.products.push({..., quantity: 1})
      // }
    },

    removeFromCart(state, action) {
      return state;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
