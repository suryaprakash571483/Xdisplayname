import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import "./index.css";

function App() {
  return (
    <div className="App">
      <User />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
