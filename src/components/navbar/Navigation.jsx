import React, { Component } from 'react';
import Work from '@material-ui/icons/Work';
import Favorite from '@material-ui/icons/Favorite';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Collections from '@material-ui/icons/Collections';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const styles = {};

const StyledTab = withStyles({
  root: {
    color: 'white',
    paddingLeft: '12px',
    '& :first-child': {
      display: 'grid',
      gridTemplateColumns: 'auto auto'
    },
    '&:focus': {
      background: 'rgba(0,0,0,0.1)'
    }
  }
})(Tab);

class Navigation extends Component {
  state = {
    menuItems: [
      { title: 'Artworks', icon: <Work />, path: '/hl_storefront/' },
      {
        title: 'About Hyeran',
        icon: <AccountCircle />,
        path: '/hl_storefront/about'
      },
      {
        title: 'Collections',
        icon: <Collections />,
        path: '/hl_storefront/collections'
      },
      {
        title: 'Favourites',
        icon: <Favorite />,
        path: '/hl_storefront/favourites'
      }
    ],
    value: '/hl_storefront/'
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    const { menuItems } = this.state;
    return (
      <Tabs value={value} onChange={this.handleChange}>
        {menuItems.map(item => (
          <StyledTab
            className="waves-effect waves-light"
            key={item.title}
            label={item.title}
            disableRipple={true}
            size="small"
            onClick={() => {
              this.handleChange;
              this.props.onClick(item.path);
            }}
            component={NavLink}
            to={item.path}
            icon={item.icon}
            value={item.path}
          />
        ))}
      </Tabs>
    );
  }
}

export default withStyles(styles)(Navigation);
