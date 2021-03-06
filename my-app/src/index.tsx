import React from "react";
import ReactDOM from "react-dom";
// import { Switch, Route } from "react-router-dom";
import "./index.css";
// import App from "./App";
import BoardGame from "./boardGame";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <Switch>
      <Route path="/" exact component={<App />} /> */}
    {/* <Route path="/boardGame" exact component={<BoardGame />} /> */}
    <BoardGame />
    {/* </Switch> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
