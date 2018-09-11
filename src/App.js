import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
// Routes
import Details from './components/details/Details';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Collections from './components/collections/Collections';
import Collection from './components/collections/Collection';
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
    shoppingCartContents: JSON.parse(localStorage.getItem('cart')) || []
  };

  handleAddToCart = art => {
    // check quantities
    this.setState({
      shoppingCartContents: [...this.state.shoppingCartContents, art]
    });
    localStorage.setItem(
      'cart',
      JSON.stringify([...this.state.shoppingCartContents, art])
    );
  };

  handleRemoveItem = art => {
    const cart = this.state.shoppingCartContents;
    const index = cart.findIndex(cartItem => cartItem.title === art.title);
    const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    this.setState({
      shoppingCartContents: newCart
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  handleEmptyCart = () => {
    if (window.confirm('Are you sure?')) {
      this.setState({ shoppingCartContents: [] });
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };

  render() {
    // console.log(JSON.parse(localStorage.getItem('cart')));
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter onChange={this.handleRouteChange}>
            <div>
              <Route path="/hl_storefront/" component={Header} exact />

              <NavBar cartItemsCount={this.state.shoppingCartContents.length} />

              <Switch>
                <Route path="/hl_storefront/" component={Artworks} exact />
                <Route path="/hl_storefront/about" component={About} exact />
                <Route
                  path="/hl_storefront/contact"
                  component={Contact}
                  exact
                />
                <Route
                  path="/hl_storefront/collections"
                  component={Collections}
                  exact
                />
                <Route
                  path="/hl_storefront/collections/:title"
                  render={props => <Collection {...props} />}
                  exact
                />
                <Route
                  path="/hl_storefront/works/:title"
                  render={props => (
                    <Details
                      {...props}
                      onAddToCart={art => this.handleAddToCart(art)}
                    />
                  )}
                  exact
                />
                <Route
                  path="/hl_storefront/cart"
                  render={props => (
                    <ShoppingCart
                      // {...props}
                      contents={this.state.shoppingCartContents}
                      onEmptyCart={this.handleEmptyCart}
                      onRemoveItem={art => this.handleRemoveItem(art)}
                    />
                  )}
                  exact
                />
                <Route
                  path="/hl_storefront/checkout"
                  component={Checkout}
                  exact
                />
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
