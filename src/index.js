import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseContext from "./useContext/UseContext";
import UseContext2 from "./useContext2/UseContext2";
import UseCallback from "./useCallback/UseCallback";
import UseCustomHook from "./useCustomHook/UseCustomHook";
import UseReducer from "./UseReducer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseMemo />
    <UseRef />
    <UseContext />
    <UseContext2 />
    <UseReducer />
    <UseCallback />
    <UseCustomHook />
    <UseEffect />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
