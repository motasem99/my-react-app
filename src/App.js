import React, { Component } from 'react'
import {Route ,BrowserRouter, Switch} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import BuildBurger from './pages/BuildBurger'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={BuildBurger} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/orders" exact component={Orders} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
