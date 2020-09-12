import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./AdminiIndex";
import "antd/dist/antd.css";
const Main = () => {
  return (
    <Router>
      <Route path="/login/" exact component={Login} />
      <Route path="/index/" exact component={Admin} />
    </Router>
  );
};

export default Main;
