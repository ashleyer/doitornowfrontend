import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { RecoilRoot } from "recoil";

import "./index.css";
import App from "./App";
import './styles/App.css'

// wrap recoil root around Router and App
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <App />
      </Router>
      </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

