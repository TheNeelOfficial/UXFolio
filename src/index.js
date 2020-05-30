import React from "react";
import { render } from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import { Home } from "./components/home/home";
import { NotFound } from "./components/notFound/notFound";

import css from "./assets/scss/master.scss";

render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>    
    </BrowserRouter>
  </div>,
  document.getElementById('app'));


if(module && module.hot) module.hot.accept();
