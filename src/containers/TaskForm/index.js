import React from 'react';
import { withStyles, Grid, Button, Box, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import styles from './styles';
import * as modalActions from '../../store/modules/modal/action';
import * as taskActions from '../../store/modules/task/action';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';
import renderSelectField from '../../components/FormHelper/Select';

const TaskForm = ({ classes, handleSubmit, invalid, submitting }) => {
  const dispatch = useDispatch();
  const taskEditing = useSelector(state => state.task.taskEditing);

  const handleSubmitForm = data => {
    const { title, description, status } = data;
    if (taskEditing && taskEditing.id) {
      dispatch(taskActions.updateTask(title, description, status));
    } else {
      dispatch(taskActions.addTask(title, description));
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
        {renderStatusSelection()}
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button
                variant="contained"
                onClick={() => dispatch(modalActions.hideModal())}
              >
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
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

const mapStateToProps = state => ({
  initialValues: {
    title: state.task.taskEditing ? state.task.taskEditing.title : null,
    description: state.task.taskEditing
      ? state.task.taskEditing.description
      : null,
    status: state.task.taskEditing ? state.task.taskEditing.status : null,
  },
});

const withConnect = connect(mapStateToProps, null);

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
