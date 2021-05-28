import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const routes = [
  {
    component: Home,
    name: "Home",
    path: "/",
    visible: false,
  }
];

const Routes = () => (
  <BrowserRouter>
  <Navbar title="Poké API" routes={routes} />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;