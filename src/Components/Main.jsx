import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./AdminiIndex";
import "antd/dist/antd.css";
const Main = () => {
  return (
    <Router>
      <Route path="/index/" exact component={Admin} />
    </Router>
  );
};

export default Main;
