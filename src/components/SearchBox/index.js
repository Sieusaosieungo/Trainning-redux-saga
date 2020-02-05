import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBox = ({ classes, handleChange }) => {
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        autoComplete="off"
        className={classes.textField}
        onChange={handleChange}
        margin="normal"
        placeholder="Nhập từ khóa"
      />
    </form>
  );
};

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
