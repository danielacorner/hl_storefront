import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
// Routes
import Details from './components/details/Details';
import About from './components/about/About';
import Favourites from './components/favourites/Favourites';
import Collections from './components/collections/Collections';
import Artworks from './components/artworks/Artworks';
import Error from './components/page-not-found/Error';
import Header from './components/navbar/Header';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import Checkout from './components/checkout/Checkout';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7986cb' },
    secondary: indigo
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <div>
              <Route path="/" component={Header} exact />

              <NavBar />

              <Switch>
                <Route path="/" component={Artworks} exact />
                <Route path="/about" component={About} exact />
                <Route path="/favourites" component={Favourites} exact />
                <Route path="/collections" component={Collections} exact />
                <Route path="/works/:title" component={Details} exact />
                <Route path="/cart" component={ShoppingCart} exact />
                <Route path="/checkout" component={Checkout} exact />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
          <div className="background" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
