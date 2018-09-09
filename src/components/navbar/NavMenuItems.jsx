import React, { Component } from 'react';
import Work from '@material-ui/icons/Work';
import Favorite from '@material-ui/icons/Favorite';
import Collections from '@material-ui/icons/Collections';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';

const List = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;
const Inline = styled.div`
  display: grid;
  padding: 0 20px;
  @media only screen and (min-width: 959px) {
    grid-template-columns: auto auto;
  }
  grid-gap: 1vw;
  align-items: center;
`;

export default class NavMenuItems extends Component {
  state = {
    menuItems: [
      { title: 'Artworks', icon: <Work /> },
      { title: 'Collections', icon: <Collections /> },
      { title: 'Favourites', icon: <Favorite /> }
    ]
  };
  render() {
    const { menuItems } = this.state;
    return (
      <List>
        {menuItems.map(item => (
          <Button key={item.title} color="inherit" size="small">
            <Inline>
              <Hidden smDown>{item.icon}</Hidden>
              {item.title}
            </Inline>
          </Button>
        ))}
      </List>
    );
  }
}
