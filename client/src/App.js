import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core';
import AppStorefront from './AppStorefront';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7986cb' },
    secondary: { main: '#ef5350' }
  }
});

const ArtQuery = gql`
  {
    allArt {
      id
      title
      imgUrl
      dimensions
      caption
      price
      avail
    }
  }
`;
const RemoveAllArtMutation = gql`
  {
    removeAllArt
  }
`;
const CreateArtMutation = gql`
  {
    createArt(
      title: "Correlation 1"
      imgUrl: "https://picsum.photos/250/250/?random"
    ) {
      title
    }
  }
`;
class App extends Component {
  render() {
    console.log(this.props);
    const {
      data: { loading, allArt }
    } = this.props;
    if (loading) {
      return null; // todo: return spinner
    }
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/* Storefront and Router */}
          <AppStorefront allArt={allArt} />

          {/* Background */}
          <div className="background" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default graphql(ArtQuery)(App);
