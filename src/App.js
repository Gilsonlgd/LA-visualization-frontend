import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
