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
import Navigation from './Navigation';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import { NavLink } from 'react-router-dom';
import * as M from 'materialize-css';
import Badge from '@material-ui/core/Badge';

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1
  },
  flex: {
    flexGrow: 1,
    textAlign: 'left',
    fontFamily: "'Nothing You Could Do', cursive",
    fontSize: '1.8em'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  avatar: {
    borderRadius: '100%',
    height: 100
    // margin: '-20px 20px -20px -10px'
  },
  fixedAvatar: {
    borderRadius: '100%',
    height: 100
  },
  badgeHidden: {
    display: 'none'
  }
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    drawerOpen: false,
    nav: null,
    topOfNav: null,
    currentPath: '/'
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
    // this.handleNavigate();
    const getNav = document.querySelector('#navbar');
    this.setState({
      nav: getNav,
      topOfNav: getNav.offsetTop
    });
    if (!document.querySelector('.App-title')) {
      //fix the nav if not on the main page
      this.handleNavigate();
    }
  };

  handleNavigate = path => {
    this.setState({ currentPath: path });
    // if the header is showing, remove fixed-nav
    setTimeout(() => {
      if (document.querySelector('.App-title')) {
        // on main page, scroll down past header
        document.body.classList.remove('fixed-nav');
        setTimeout(() => {
          document.querySelector('#navbar').scrollIntoView(true);
          document.body.classList.add('fixed-nav');
        }, 0);
        const elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {});
      } else {
        // document.body.classList.remove('fixed-nav');
        setTimeout(
          () => document.querySelector('#navbar').scrollIntoView(true),
          0
        );
      }
    }, 0);
  };

  fixNav = () => {
    const { topOfNav } = this.state;
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop =
        document.querySelector('#navbar').offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      // only remove fixed nav if on main page
      if (document.querySelector('.App-title')) {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
      }
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
            <img
              src={avatar}
              className={
                this.props.fixed ? classes.fixedAvatar : classes.avatar
              }
              alt="logo"
            />

            <Typography
              variant="title"
              color="inherit"
              className={classes.flex + ' nav-title'}
            >
              Hyeran Lee
            </Typography>

            <Hidden xsDown>
              <Navigation
                onClick={path => this.handleNavigate(path)}
                currentPath={this.state.currentPath}
              />
            </Hidden>

            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleShoppingCartClick}
                color="inherit"
              >
                <Badge
                  classes={{
                    root: classes.badge,
                    badge:
                      this.props.cartItemsCount === 0 && classes.badgeHidden
                  }}
                  badgeContent={this.props.cartItemsCount}
                  color={
                    this.props.cartItemsCount === 0 ? 'primary' : 'secondary'
                  }
                >
                  <ShoppingCart />
                </Badge>
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
                <MenuItem onClick={this.handleClose}>
                  <NavLink to="/hl_storefront/cart" style={{ color: 'black' }}>
                    Shopping Cart
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <NavLink
                    to="/hl_storefront/checkout"
                    style={{ color: 'black' }}
                  >
                    Checkout
                  </NavLink>
                </MenuItem>
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
