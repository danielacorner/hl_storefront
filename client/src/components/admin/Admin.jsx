import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { DataContext } from '../../App';
import Select from './Select';

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
  formFields: {
    display: 'grid',
    gridTemplateRows: 'repeat(auto-fill, auto)',
    '& *': {
      color: 'white'
    },
    padding: '20px'
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
      <DataContext.Consumer>
        {context => {
          console.log(context);
          return (
            <div
              style={{
                display: 'grid',
                placeItems: 'center center',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                position: 'fixed',
                top: '72px',
                right: '0',
                bottom: '0',
                width: 'auto'
              }}
            >
              <div className={classes.formFields}>
                <h5 className={classes.panelTitle}>Administration</h5>
                <TextField
                  id="add-art"
                  label="Add an item..."
                  value={text}
                  onChange={this.handleAddArtInputChange}
                  onKeyDown={this.handleAddArtInputKeyDown}
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="update-art"
                  label="Update an item..."
                  value={text}
                  onChange={this.handleAddArtInputChange}
                  onKeyDown={this.handleAddArtInputKeyDown}
                  margin="normal"
                  fullWidth
                />
                <Select
                  options={context.allArt.map(a => a.title)}
                  target="an item"
                  action="Delete"
                />

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
                <Select
                  options={context.allArt.map(a => a.title)}
                  target="a collection"
                  action="Delete"
                />
              </div>
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default withStyles(styles)(Admin);
