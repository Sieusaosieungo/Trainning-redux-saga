import React from 'react';
import { withStyles, Grid, Button, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import styles from './styles';
import * as modalActions from '../../actions/modal';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';

const TaskForm = ({
  classes,
  modalActionCreators,
  handleSubmit,
  invalid,
  submitting,
}) => {
  const { hideModal } = modalActionCreators;
  const handleSubmitForm = () => {
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container>
        <Grid item md={12}>
          <Field
            id="title"
            label="Tiêu đề"
            className={classes.textField}
            margin="normal"
            name="title"
            component={renderTextField}
          />
        </Grid>
        <Grid item md={12}>
          <Field
            id="description"
            label="Mô tả"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
            name="description"
            component={renderTextField}
          />
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button variant="contained" onClick={hideModal}>
                Hủy bỏ
              </Button>
            </Box>
            <Button
              disabled={invalid || submitting}
              variant="contained"
              color="primary"
              type="submit"
            >
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
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
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
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
