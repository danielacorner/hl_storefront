import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Autocomplete from './Autocomplete';

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
  },
  formField: {
    display: 'grid',
    gridTemplateRows: 'repeat(auto-fill, auto)',
    '& *': {
      color: 'white'
    }
  }
});

class Admin extends Component {
  state = {
    text: ''
  };

  // Add Artwork
  handleAddArtInputChange = e => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
  };
  handleAddArtInputKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.onSubmit(this.state.text);
      this.setState({
        text: ''
      });
    }
  };

  // Add Collection

  // Update Artwork

  // Remove Artwork

  render() {
    const { text } = this.state;
    const { classes } = this.props;
    return (
      <div
        style={{
          display: 'grid',
          placeItems: 'center center',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          position: 'fixed',
          top: '0',
          bottom: '0',
          right: '0',
          left: '70vw'
        }}
      >
        <div className={classes.formField}>
          <TextField
            id="add-art"
            label="Add an artwork..."
            value={text}
            onChange={this.handleAddArtInputChange}
            onKeyDown={this.handleAddArtInputKeyDown}
            margin="normal"
            fullWidth
          />
          <TextField
            id="update-art"
            label="Update an artwork..."
            value={text}
            onChange={this.handleAddArtInputChange}
            onKeyDown={this.handleAddArtInputKeyDown}
            margin="normal"
            fullWidth
          />
          <Autocomplete removeType="artwork" />

          <Divider />

          <TextField
            id="add-collection"
            label="Add a collection..."
            value={text}
            onChange={this.handleAddCollectionInputChange}
            onKeyDown={this.handleAddCollectionInputKeyDown}
            margin="normal"
            fullWidth
          />
          <TextField
            id="update-collection"
            label="Update a collection..."
            value={text}
            onChange={this.handleAddArtInputChange}
            onKeyDown={this.handleAddArtInputKeyDown}
            margin="normal"
            fullWidth
          />
          <Autocomplete removeType="collection" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Admin);
