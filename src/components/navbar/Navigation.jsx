import React, { Component } from 'react';
import Work from '@material-ui/icons/Work';
import Message from '@material-ui/icons/Message';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Collections from '@material-ui/icons/Collections';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {};

const StyledTab = withStyles({
  root: {
    minWidth: null,
    color: 'white',
    zIndex: 0,
    paddingLeft: '0',
    '@media (min-width: 960px)': {
      paddingLeft: '12px'
    },
    '& :first-child': {
      display: 'grid',
      gridTemplateColumns: 'auto',
      '@media (min-width: 960px)': {
        gridTemplateColumns: '20px 1fr'
      },
      '& span': {
        display: 'none',
        '@media (min-width: 960px)': {
          display: 'block'
        }
      }
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
        title: 'Contact',
        icon: <Message />,
        path: '/hl_storefront/contact'
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
          // todo: look into tab + tooltip bug -- initialize tooltip using materialize-css?
          // <Tooltip
          //   key={item.title}
          //   title={window.innerWidth < 960 ? item.title : ''}
          // >
          <StyledTab
            key={item.title}
            className="waves-effect waves-light"
            label={item.title}
            disableRipple={true}
            // size="small"
            onClick={() => {
              this.handleChange;
              this.props.onClick(item.path);
            }}
            component={NavLink}
            to={item.path}
            icon={item.icon}
            value={item.path}
          />
          // </Tooltip>
        ))}
      </Tabs>
    );
  }
}

export default withStyles(styles)(Navigation);
