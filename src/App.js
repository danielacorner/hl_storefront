import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import Artworks from './components/artworks/Artworks';

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
          <header className="App-header">
            <div className="App-header-background" alt="background image">
              <div className="App-title">
                <h1>Hyeran Lee</h1>
              </div>
            </div>
          </header>
          <NavBar />
          <Artworks />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
