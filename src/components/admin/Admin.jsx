import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class Admin extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
  };
  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.onSubmit(this.state.text);
      this.setState({
        text: ''
      });
    }
  };
  render() {
    const { text } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          placeItems: 'center center',
          background: '#333',
          position: 'fixed',
          top: '0',
          bottom: '0',
          right: '0',
          left: '70vw'
        }}
      >
        <div>
          <TextField
            id="name"
            label="artwork..."
            value={text}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            margin="normal"
            fullWidth
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Admin);
