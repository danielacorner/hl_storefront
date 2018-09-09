import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { actionListItems, otherActionListItems } from './sidenavData';

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
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{actionListItems}</List>
        <Divider />
        <List>{otherActionListItems}</List>
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
