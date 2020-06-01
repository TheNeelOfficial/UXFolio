import React from "react";
import { render } from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import { Cursor } from "./components/cursor/cursor";
import { Home } from "./components/home/home";
import { NotFound } from "./components/notFound/notFound";

import css from "./assets/scss/master.scss";

render(
  <div>
    <Cursor/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>    
    </BrowserRouter>
  </div>,
  document.getElementById('app'));


if(module && module.hot) module.hot.accept();
