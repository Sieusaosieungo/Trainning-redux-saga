import React from 'react';
import { TextField, withStyles, Grid, Button, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import styles from './styles';
import * as modalActions from '../../actions/modal';

const TaskForm = ({ classes, modalActionCreators, handleSubmit }) => {
  const { hideModal } = modalActionCreators;
  const handleSubmitForm = data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container>
        <Grid item md={12}>
          <Field name="title" component="input" />
        </Grid>
        <Grid item md={12}>
          <TextField
            id="standard-name"
            label="Tiêu đề"
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            id="standard-multiline-flexible"
            label="Mô tả"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button variant="contained" onClick={hideModal}>
                Hủy bỏ
              </Button>
            </Box>
            <Button variant="contained" color="primary" type="submit">
              Lưu lại
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
