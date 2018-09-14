import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core';
import AppStorefront from './AppStorefront';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7986cb' },
    secondary: { main: '#ef5350' }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/* Storefront and Router */}
          <AppStorefront />

          {/* Background */}
          <div className="background" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
