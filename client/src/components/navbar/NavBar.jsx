import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import avatar from '../../images/hl_avatar.jpg';
import NavDrawer from './NavDrawer';
import Navigation from './Navigation';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import { NavLink } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
//icons
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import Work from '@material-ui/icons/Work';
import Message from '@material-ui/icons/Message';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Collections from '@material-ui/icons/Collections';

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
    ]
  };

  // listen for clicking outside
  componentWillMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
    window.addEventListener('scroll', this.fixNav);
    // fix nav on non-main pages
    const mainPage = !!document.querySelector('.App-title');
    if (!mainPage) {
      document.body.classList.add('fixed-avatar');
    }
  };
  componentWillUnount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
    window.removeEventListener('scroll', this.fixNav);
  };
  componentDidMount = () => {
    const getNav = document.querySelector('#navbar');
    this.setState({
      nav: getNav,
      topOfNav: getNav.offsetTop
    });
    if (window.location.pathname !== '/hl_storefront/') {
      //fix the nav if not on the main page
      this.props.onNavigate();
    }
  };

  fixNav = () => {
    const { topOfNav } = this.state;
    // fix the avatar when scrolled just above its top
    const topOfAvatar = topOfNav - 160;
    if (window.scrollY >= topOfAvatar) {
      document.body.classList.add('fixed-avatar');
    } else {
      document.body.classList.remove('fixed-avatar');
    }
    // fix the navbar when scrolled past it
    if (window.scrollY >= topOfNav) {
      // fix the navbar
      document.body.style.paddingTop =
        document.querySelector('#navbar').offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      const mainPage = !!document.querySelector('.App-title');
      if (mainPage) {
        // main page
        document.body.style.paddingTop = 0;
        // unfix the navbar
        document.body.classList.remove('fixed-nav');
        // document.body.classList.remove('fixed-avatar');
      }
    }
  };

  handleClick = e => {
    // if the click is outside, close the nav drawer
    Array.from(e.target.classList)
      .join(',')
      .includes('MuiBackdrop') && this.closeDrawer();
  };

  closeDrawer = () => {
    this.setState({
      drawerOpen: false
    });
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
            {/* mobile sidenav menu button */}
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
              style={{ zIndex: 1 }}
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

            {/* desktop tabs */}
            <Hidden xsDown>
              <Navigation
                menuItems={this.state.menuItems}
                currentPath={this.props.currentPath}
              />
            </Hidden>

            <div>
              {/* shopping cart icon button */}
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

              {/* shopping cart menu */}
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

        {/* mobile sidenav menu */}
        <NavDrawer
          open={this.state.drawerOpen}
          menuItems={this.state.menuItems}
          onNavigate={this.props.onNavigate}
          closeDrawer={this.closeDrawer}
        />
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
