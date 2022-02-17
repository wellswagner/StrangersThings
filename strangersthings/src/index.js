import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const app = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
