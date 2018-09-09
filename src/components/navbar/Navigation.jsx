import React, { Component } from 'react';
import Work from '@material-ui/icons/Work';
import Favorite from '@material-ui/icons/Favorite';
import Collections from '@material-ui/icons/Collections';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
const List = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;
const Inline = styled.div`
  color: white;
  display: grid;
  padding: 0 20px;
  @media only screen and (min-width: 959px) {
    grid-template-columns: auto auto;
  }
  grid-gap: 1vw;
  align-items: center;
`;
const styles = {
  highlighted: {
    borderBottom: '2px solid currentColor',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0'
  }
};

class Navigation extends Component {
  state = {
    menuItems: [
      { title: 'Artworks', icon: <Work />, path: '/' },
      { title: 'Collections', icon: <Collections />, path: '/collections' },
      { title: 'Favourites', icon: <Favorite />, path: '/favourites' }
    ]
  };
  render() {
    const { classes } = this.props;
    const { menuItems } = this.state;
    return (
      <List>
        {menuItems.map(item => (
          <Button
            key={item.title}
            color="inherit"
            size="small"
            onClick={() => this.props.onClick(item.path)}
            className={
              this.props.currentPath === item.path ? classes.highlighted : null
            }
          >
            <NavLink to={item.path}>
              <Inline>
                <Hidden smDown>{item.icon}</Hidden>
                {item.title}
              </Inline>
            </NavLink>
          </Button>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(Navigation);
