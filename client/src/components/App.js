import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './styles/App.css';

import Layout from "./Layout"
import Home from "../pages/Home";
import pcDetailsComponent from "../pages/pcDetails"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/equipos/:id" component={pcDetailsComponent}  />
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
