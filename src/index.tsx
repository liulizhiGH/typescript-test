import  React from "react";
import  ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

import xxx from './123'

xxx();
console.log("debugger start456!!!!!!!");

ReactDOM.render(
  <Hello compiler="Typescript" framework="React" />,
  document.getElementById("root")
);
