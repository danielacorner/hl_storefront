import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class TemporaryDrawer extends React.Component {
  render() {
    const { classes, menuItems } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {menuItems.map(item => {
            return (
              <ListItem
                key={JSON.stringify(item)}
                button
                onClick={() => {
                  this.props.closeDrawer();
                  this.props.onNavigate();
                }}
                component={NavLink}
                to={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );

    // const fullList = (
    //   <div className={classes.fullList}>
    //     <List>{actionListItems}</List>
    //     <Divider />
    //     <List>{otherActionListItems}</List>
    //   </div>
    // );

    return (
      <div>
        <Drawer
          open={this.props.open}
          // onClose={() => this.setState({ open: false })}
        >
          <div
            tabIndex={0}
            role="button"
            // onClick={() => this.setState({ open: false })}
            // onKeyDown={() => this.setState({ open: false })}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
