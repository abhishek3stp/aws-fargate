import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardCount from "./CardCount.js";

const App = () => {
  return <CardCount />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
