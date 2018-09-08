import React, { Component } from 'react';
import Work from '@material-ui/icons/Work';
import Favorite from '@material-ui/icons/Favorite';
import Collections from '@material-ui/icons/Collections';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;
const Inline = styled.div`
  display: grid;
  padding: 0 20px;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;

export default class NavMenuItems extends Component {
  state = {
    menuItems: [
      { title: 'Artworks', icon: <Work /> },
      { title: 'Collections', icon: <Favorite /> },
      { title: 'Favourites', icon: <Collections /> }
    ]
  };
  render() {
    const { menuItems } = this.state;
    return (
      <List>
        {menuItems.map(item => (
          <Inline key={item.title}>
            {item.icon}
            <Typography variant="title" color="inherit">
              {item.title}
            </Typography>
          </Inline>
        ))}
      </List>
    );
  }
}
