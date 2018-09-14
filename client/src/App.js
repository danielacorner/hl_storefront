import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme /*, withStyles */ } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppStorefront from './AppStorefront';

import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const Context = React.createContext();

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
      input: {
        title: "Correlation 1"
        imgUrl: "https://picsum.photos/250/250/?random"
        dimensions: [1, 2]
        caption: "caption!"
        price: null
      }
    )
  }
`;
const UpdateArtMutation = gql`
  mutation($id: ID!, $input: ArtInput!) {
    updateArt(id: $id, input: $input)
  }
`;
const RemoveArtMutation = gql`
  mutation($id: ID!) {
    removeArt(id: "5b9c1263ee06e788b4def199")
  }
`;
class App extends Component {
  updateArt = async (art, input) => {
    await this.props.updateArt({
      variables: {
        id: art.id,
        input: input
      }
    });
  };
  removeArt = async art => {
    await this.props.removeArt({
      variables: {
        id: art.id
      }
    });
  };

  render() {
    const {
      data: { loading, allArt }
    } = this.props;

    if (loading) {
      return (
        <div
          style={{
            display: 'grid',
            placeItems: 'center center',
            height: '100vh'
          }}
        >
          <CircularProgress size={'20vw'} />
        </div>
      );
    }
    return (
      <Context.Provider
        value={{ updateArt: this.updateArt, removeArt: this.removeArt }}
      >
        <MuiThemeProvider theme={theme}>
          <div className="App">
            {/* Storefront and Router */}
            <AppStorefront
              allArt={allArt}
              onRemove={art => this.removeArt(art)}
            />

            {/* Background */}
            <div className="background" />
          </div>
        </MuiThemeProvider>
      </Context.Provider>
    );
  }
}

export default compose(
  // withStyles(styles),
  graphql(UpdateArtMutation, { name: 'updateArt' }),
  graphql(RemoveArtMutation, { name: 'removeArt' }),
  graphql(ArtQuery)
)(App);
