import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../container/Home/Home";
import Trial from "../container/Trial/Trial";
import Login from "../container/Login/Login";
import About from "../container/About/About";
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Redirect
      from="/"
      to="/home" />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/trial" component={Trial} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Router;
