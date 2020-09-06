import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Pokemon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
