import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toogle-slice";
import cartSlice from "./cart-slice";

const cartStore = configureStore({
  reducer: { ui: toggleSlice.reducer, cart: cartSlice.reducer },
});

export default cartStore;
