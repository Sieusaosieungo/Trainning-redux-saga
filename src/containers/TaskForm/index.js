import React from 'react';
import { withStyles, Grid, Button, Box, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import styles from './styles';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';
import renderSelectField from '../../components/FormHelper/Select';

const TaskForm = ({
  classes,
  modalActionCreators,
  taskActionCreators,
  handleSubmit,
  invalid,
  submitting,
  taskEditing,
}) => {
  const { hideModal } = modalActionCreators;
  const handleSubmitForm = data => {
    const { addTask, updateTask } = taskActionCreators;
    const { title, description, status } = data;
    if (taskEditing && taskEditing.id) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
  };

  const renderStatusSelection = () => {
    let xhtml = null;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng thái"
          className={classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      );
    }
    return xhtml;
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
            // value={taskEditing ? taskEditing.title : null}
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
            // value={taskEditing ? taskEditing.description : null}
          />
        </Grid>
        {renderStatusSelection()}
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
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  taskEditing: PropTypes.object,
};

const mapStateToProps = state => ({
  taskEditing: state.task.taskEditing,
  initialValues: {
    title: state.task.taskEditing ? state.task.taskEditing.title : null,
    description: state.task.taskEditing
      ? state.task.taskEditing.description
      : null,
    status: state.task.taskEditing ? state.task.taskEditing.status : null,
  },
});
const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    taskActionCreators: bindActionCreators(taskActions, dispatch),
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
