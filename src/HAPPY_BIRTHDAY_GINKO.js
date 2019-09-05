import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";

const About = () => <p>このサイトについて</p>;

export default () => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Router>
);
