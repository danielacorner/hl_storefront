import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme /*, withStyles */ } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import artworks from './images/hl_artworks';

import AppStorefront from './AppStorefront';

import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

export const DataContext = React.createContext();

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7986cb' },
    secondary: { main: '#ef5350' }
  }
});

const ArtQuery = gql`
  query {
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
  mutation {
    removeAllArt
  }
`;
const RemoveArtMutation = gql`
  mutation($id: ID!) {
    removeArt(id: $id)
  }
`;
const CreateArtMutation = gql`
  mutation($input: ArtInput!) {
    createArt(input: $input) {
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
const UpdateArtMutation = gql`
  mutation($id: ID!, $input: ArtInput!) {
    updateArt(id: $id, input: $input)
  }
`;

class App extends Component {
  state = {
    allArt: null,
    createArt: art => this.createArt(art),
    updateArt: (art, input) => this.updateArt(art, input),
    removeArt: art => this.removeArt(art)
  };
  createArt = async input => {
    await this.props.createArt({
      variables: {
        input: input
      }
    });
  };
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
          <CircularProgress size={'10vw'} />
        </div>
      );
    }

    // !for development: remove all art
    console.group();
    console.log(this.props);
    this.props.removeAllArt();
    // !for development: add all art from JSON data
    artworks.forEach(async art => {
      const input = {
        title: art.title,
        imgUrl: art.image,
        dimensions: [art.height, art.width],
        caption: art.caption,
        price: art.price ? Number(art.price.replace(/[^0-9.-]+/g, '')) : 0,
        avail: true
      };
      await this.createArt(input);
    });
    console.log('removed and added all', allArt);
    console.groupEnd();

    return (
      <DataContext.Provider value={{ ...this.state, allArt: allArt }}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            {/* Storefront and Router */}
            <AppStorefront />

            {/* Background */}
            <div className="background" />
          </div>
        </MuiThemeProvider>
      </DataContext.Provider>
    );
  }
}

export default compose(
  // withStyles(styles),
  graphql(CreateArtMutation, { name: 'createArt' }),
  graphql(UpdateArtMutation, { name: 'updateArt' }),
  graphql(RemoveArtMutation, { name: 'removeArt' }),
  graphql(RemoveAllArtMutation, { name: 'removeAllArt' }),
  graphql(ArtQuery)
)(App);
