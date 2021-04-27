import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Press from "./Press";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Press />
  </StrictMode>,
  rootElement
);
