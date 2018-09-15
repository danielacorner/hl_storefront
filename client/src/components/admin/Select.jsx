import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  button: {}
});

class NativeSelects extends React.Component {
  state = {
    item: ''
  };

  handleChange = item => event => {
    this.setState({ [item]: event.target.value });
  };

  render() {
    const { classes, options, action, target } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-native">
          {action} {target}
          ...
        </InputLabel>
        <Select
          native
          value={this.state.item}
          onChange={this.handleChange('item')}
          inputProps={{
            name: 'item',
            id: 'select-native'
          }}
        >
          <option value="" />
          {options.map(opt => {
            return (
              <option
                key={JSON.stringify(opt)}
                style={{ color: 'black' }}
                value={opt}
              >
                {opt}
              </option>
            );
          })}
        </Select>
        <Button
          style={{ display: this.state.item === '' ? 'none' : 'block' }}
          variant="outlined"
          color="secondary"
          className={classes.button}
        >
          {action}
        </Button>
      </FormControl>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NativeSelects);
