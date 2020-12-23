import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AllTodo from "./pages/AllTodo";
import Header from "./components/Header";
const Router = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Switch>
          <Route path="/Login" component={Login} exact />
        </Switch>
        <Switch>
          <Route path="/AllTodo" component={AllTodo} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
