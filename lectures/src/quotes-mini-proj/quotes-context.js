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
    },
    sortUp(state) {
      state.quotes.sort((a, b) => {
        return a.id > b.id;
      });
    },
    sortDown(state) {
      state.quotes.sort((a, b) => {
        return a.id < b.id;
      });
    },
  },
});

const quotesStore = configureStore({
  reducer: { quotes: quoteSlice.reducer },
});
export const quoteActions = quoteSlice.actions;
export default quotesStore;
