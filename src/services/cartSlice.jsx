import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartCount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      const existingProduct = state.cart.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        return;
      }
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addToCartCount(state) {
      // find the unique products in the cart and count those unique products
      const uniqueProducts = state.cart.filter(
        (item, index, self) => index === self.findIndex((t) => t.id === item.id)
      );
      state.cartCount = uniqueProducts.length;
    },
    incrementQty(state, action){
      state.cart = state.cart.map((item) => 
         item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item);
    },
    decrementQty(state, action){
      state.cart = state.cart.map((item)=> 
        item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item);
    },

  },
});

export const { addToCart, removeFromCart, addToCartCount, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
