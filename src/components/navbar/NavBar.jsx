import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import avatar from '../../images/hl_avatar.jpg';
import NavDrawer from './NavDrawer';
import NavMenuItems from './NavMenuItems';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1
  },
  flex: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  avatar: {
    borderRadius: '100%',
    height: 100,
    margin: '-20px 20px -20px -10px'
  }
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    drawerOpen: false,
    nav: null,
    topOfNav: null
  };

  // listen for clicking outside
  componentWillMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
    window.addEventListener('scroll', this.fixNav);
  };
  componentWillUnount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
  };
  componentDidMount = () => {
    const nav = document.querySelector('#navbar');
    this.setState({
      nav: nav,
      topOfNav: nav.offsetTop
    });
  };

  fixNav = () => {
    const { nav, topOfNav } = this.state;
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  };

  handleClick = e => {
    // if the click is outside, close the nav drawer
    Array.from(e.target.classList)
      .join(',')
      .includes('MuiBackdrop') && this.handleClickOutside();
  };
  handleClickOutside = () => {
    this.setState({ drawerOpen: false });
  };

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  handleShoppingCartClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root} id="navbar">
        <AppBar position="static">
          <Toolbar>
            <Hidden smUp>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <img src={avatar} className={classes.avatar} alt="logo" />

            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Hyeran Lee
            </Typography>

            <Hidden xsDown>
              <NavMenuItems />
            </Hidden>

            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleShoppingCartClick}
                color="inherit"
              >
                <ShoppingCart />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Shopping Cart</MenuItem>
                <MenuItem onClick={this.handleClose}>Checkout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <NavDrawer open={this.state.drawerOpen} />
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(MenuAppBar);
