import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  withStyles,
} from '@material-ui/core';
import styles from './styles';

const TaskForm = ({ open, classes, onClose }) => (
  <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
    <DialogContent>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        className={classes.textField}
        margin="normal"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={onClose} color="primary">
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export default withStyles(styles)(TaskForm);
