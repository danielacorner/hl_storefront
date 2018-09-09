import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core';
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
    secondary: { main: '#ef5350' }
  }
});

class App extends Component {
  state = {
    shoppingCartContents: []
  };
  handleAddToCart = art => {
    this.setState({
      shoppingCartContents: [...this.state.shoppingCartContents, art.title]
    });
    console.log(this.state.shoppingCartContents);
  };
  handleUpdateCart = () => {
    this.setState({
      shoppingCartContents: [...this.state.shoppingCartContents, 1]
    });
    console.log(this.state.shoppingCartContents);
  };
  handleEmptyCart = () => {
    this.setState({ shoppingCartContents: null });
    console.log(this.state.shoppingCartContents);
  };
  handleProceedToCheckout = () => {
    console.log('proceed to checkout!');
  };
  componentWillUpdate() {
    // if (!document.querySelector('.App-header')) {
    console.log(window.location.pathname);
    // }
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter onChange={this.handleRouteChange}>
            <div>
              <Route path="/" component={Header} exact />

              <NavBar cartItemsCount={this.state.shoppingCartContents.length} />

              <Switch>
                <Route path="/" component={Artworks} exact />
                <Route path="/about" component={About} exact />
                <Route path="/favourites" component={Favourites} exact />
                <Route path="/collections" component={Collections} exact />
                <Route
                  path="/works/:title"
                  render={props => (
                    <Details
                      {...props}
                      onAddToCart={art => this.handleAddToCart(art)}
                    />
                  )}
                  exact
                />
                <Route
                  path="/cart"
                  render={props => (
                    <ShoppingCart
                      {...props}
                      contents={this.state.shoppingCartContents}
                      onEmptyCart={this.handleEmptyCart}
                      onUpdateCart={this.handleUpdateCart}
                      onProceedToCheckout={this.handleProceedToCheckout}
                    />
                  )}
                  exact
                />
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
