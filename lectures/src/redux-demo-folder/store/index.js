import { act } from "react-dom/test-utils";
import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initValue = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initValue,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogle(state) {
      state.show = !state.show;
    },
  },
});

/*function CounterReducer(state = initValue, action) {
  if (action.type === "ADD") {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }
  if (action.type === "SUB") {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload,
      show: state.show,
    };
  }

  if (action.type === "toogle") {
    return {
      counter: state.counter,
      show: !state.show,
    };
  }

  return state;
}*/
const initialState = {
  auth: false,
};

const authSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
{
  /* Kada se koristi redux uvek se override objekat koji se vraca
    nikada ne treba da se radi mutacija tj menjanje objekta, 
    osima ako ne koristimo redux/toolkit */
}
