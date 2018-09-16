import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  TextField,
  Divider,
  Modal,
  Button
} from '@material-ui/core';
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
    // fix materialize.css input margin overrides,
    '& *': {
      '&:nth-child(2)': {
        '& input': {
          marginBottom: 0
        }
      }
    }
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
  },
  panelTitle: {
    margin: 'auto'
  }
});

class Admin extends Component {
  state = {
    text: '',
    target: null,
    modalOpen: false,
    modalItem: null
  };
  openUpdateModal = (id, context) => {
    const itemToUpdate = context.allArt.find(a => a.id === id);
    this.setState({ modalItem: itemToUpdate, modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  // Add Artwork
  handleInputChange = e => {
    const newText = e.target.value;
    this.setState({
      text: newText,
      target: e.target.id
    });
    console.log(e.target.id);
  };
  handleInputKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.onSubmit(this.state.text);
      this.setState({
        text: ''
      });
    }
  };
  // Update Artwork

  // Remove Artwork
  handleDelete = (id, context) => {
    const itemToDelete = context.allArt.find(a => a.id === id);
    context.removeArt(itemToDelete);
  };

  // Add Collection

  // Update Artwork
  handleUpdateSubmit = context => {
    const newArt = Object.assign({}, this.state.modalItem); //deep clone
    const oldArt = context.allArt.find(a => a.id === newArt.id);
    delete newArt.id; // ArtInput does not accept field id
    delete newArt.__typename;
    console.log({ oldArt, newArt });
    context.updateArt(oldArt, newArt);
  };
  // Remove Artwork
  handleDeleteCollection = collection => {
    console.log(this.props);
    console.log(collection);
  };

  render() {
    const { text, modalItem, modalOpen } = this.state;
    const { classes } = this.props;

    return (
      <DataContext.Consumer>
        {context => {
          // console.log(context);
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
                <h5 className={classes.panelTitle}>Edit Items</h5>
                {/* Create */}
                <TextField
                  className={classes.textField}
                  id="add-art"
                  label="Add an item..."
                  value={text}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleInputKeyDown}
                  fullWidth
                />
                {/* Update */}
                <Select
                  options={context.allArt}
                  target="an item"
                  action="Update"
                  onSelectClick={id => this.openUpdateModal(id, context)}
                />
                {/* Delete */}
                <Select
                  options={context.allArt}
                  target="an item"
                  action="Delete"
                  onDelete={id => this.handleDelete(id, context)}
                />

                <br />
                <Divider
                  style={{
                    backgroundColor: 'white',
                    height: '2px',
                    margin: '0 -20px'
                  }}
                />
                <br />

                <h5 className={classes.panelTitle}>Edit Collections</h5>
                <TextField
                  className={classes.textField}
                  id="add-collection"
                  label="Add a collection..."
                  value={text}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleInputKeyDown}
                  fullWidth
                />
                <TextField
                  className={classes.textField}
                  id="update-collection"
                  label="Update a collection..."
                  value={text}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleInputKeyDown}
                  fullWidth
                />
                <Select
                  options={context.allArt}
                  target="a collection"
                  action="Delete"
                  onSelectClick={collection =>
                    this.handleDeleteCollection(collection)
                  }
                />
              </div>
              {/* Modal */}
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={modalOpen}
                onClose={this.handleClose}
                style={{
                  margin: 'auto',
                  display: 'grid',
                  placeItems: 'center center',
                  width: '70%',
                  minWidth: '360px'
                }}
              >
                {modalItem && (
                  <div
                    style={{
                      margin: 'auto',
                      background: 'white',
                      padding: '30px',
                      display: 'grid',
                      width: '100%',
                      gridGap: 30
                    }}
                  >
                    <Typography
                      variant="title"
                      style={{ margin: 'auto' }}
                      id="modal-title"
                    >
                      Updating: {modalItem.title}
                    </Typography>
                    <TextField
                      className={classes.textField}
                      id="update-title"
                      data-field="title"
                      label="title"
                      value={modalItem.title}
                      onChange={this.handleInputChange}
                      fullWidth
                    />
                    <TextField
                      className={classes.textField}
                      id="update-imgUrl"
                      label="Image URL"
                      data-field="imgUrl"
                      value={modalItem.imgUrl}
                      onChange={this.handleInputChange}
                      fullWidth
                    />
                    <TextField
                      className={classes.textField}
                      id="update-width"
                      label="Width"
                      data-field="width"
                      value={modalItem.dimensions[0]}
                      onChange={this.handleInputChange}
                    />
                    <TextField
                      className={classes.textField}
                      id="update-height"
                      label="Height"
                      data-field="height"
                      value={modalItem.dimensions[1]}
                      onChange={this.handleInputChange}
                    />
                    <TextField
                      className={classes.textField}
                      id="update-caption"
                      label="Caption / Description"
                      data-field="caption"
                      value={modalItem.caption}
                      onChange={e =>
                        this.setState({
                          modalItem: { ...modalItem, caption: e.target.value }
                        })
                      }
                      fullWidth
                    />
                    <TextField
                      className={classes.textField}
                      id="update-price"
                      label="Price"
                      data-field="price"
                      value={modalItem.price}
                      onChange={this.handleInputChange}
                      fullWidth
                    />
                    <div
                      style={{
                        display: 'grid',
                        justifyItems: 'right',
                        gridAutoFlow: 'column',
                        gridTemplateColumns: '1fr'
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.btnUpdate}
                        onClick={() => this.handleUpdateSubmit(context)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.btnCancel}
                        onClick={this.handleCloseModal}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </Modal>
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default withStyles(styles)(Admin);
