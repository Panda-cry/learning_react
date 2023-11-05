import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        console.log("Nema takvog itema pa moramo da dodamo");
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          amount: 1,
          total: newItem.price,
        });
      } else {
        existingItem.amount++;
        existingItem.total = existingItem.price * existingItem.amount;
      }
    },
    removeItem(state, action) {
      const removeElement = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === removeElement.id
      );
      if (existingItem) {
        console.log("Imamo i menjamo ga!!");
        existingItem.amount--;
        existingItem.total = existingItem.price * existingItem.amount;
      }
    },
  },
});

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch();
    const response = await fetch("");
    /* Hendlanje errora !!! i to je otp actions creator jer nije u 
    Reduceru !!! i moze da bude async ! */
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
