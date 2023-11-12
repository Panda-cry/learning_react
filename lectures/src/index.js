import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "./lecture_10/componets/auth-context";
import { Provider } from "react-redux";
import store from "./redux-demo-folder/store/index";
import cartStore from "./lecutre_17/store/cart-store-redux";
import { BrowserRouter } from "react-router-dom";
import quotesStore from "./quotes-mini-proj/quotes-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={quotesStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
//Provide from redux store={cartStore}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
