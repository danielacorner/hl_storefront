import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import Gallery from './components/artworks/Masonry';
import backgroundImage from './images/artworks/art-1.jpg';
import artworks from './images/hl_artworks';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header parallax-container">
            <div className="App-header-background parallax">
              <img alt="background" src={backgroundImage} />
            </div>
            <div className="App-title">
              <h1>Hyeran Lee</h1>
            </div>
          </header>
          <NavBar />
          <Gallery elements={artworks} />
        </div>
        <div className="background" />
      </MuiThemeProvider>
    );
  }
}

export default App;
