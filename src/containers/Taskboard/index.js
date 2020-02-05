import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import * as taskActions from '../../actions/task';
import SearchBox from '../../components/SearchBox';

const Taskboard = ({ classes, taskActionCreators, listTask }) => {
  const [state, setState] = useState({
    open: false,
  });

  // useEffect(() => {
  //   const { fetchListTask } = taskActionCreators;
  //   fetchListTask();
  // }, []);

  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value,
          );
          return (
            <TaskList tasks={taskFiltered} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  const handleClose = () => {
    setState({ open: false });
  };

  const openForm = () => {
    setState({ open: true });
  };

  const renderForm = () => {
    const { open } = state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={handleClose} />;

    return xhtml;
  };

  const loadData = () => {
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  };

  const handleFilter = e => {
    const { value } = e.target;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  const renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={handleFilter} />;
    return xhtml;
  };

  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={loadData}
        style={{
          marginRight: 20,
        }}
      >
        Load Data
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <AddIcon />
        Thêm mới công việc
      </Button>
      {renderSearchBox()}
      {renderBoard()}
      {renderForm()}
    </div>
  );
};

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard),
);
