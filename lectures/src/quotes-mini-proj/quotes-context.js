import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  quotes: [],
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    addQuote(state, action) {
      state.quotes.push(action.payload);
      console.log(state.quotes.length);
    },
  },
});

const quotesStore = configureStore({
  reducer: { quotes: quoteSlice.reducer },
});
export const quoteActions = quoteSlice.actions;
export default quotesStore;
