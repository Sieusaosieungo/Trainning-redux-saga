import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './styles';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'With my friend',
    status: 2,
  },
  {
    id: 1,
    title: 'Play game',
    description: '',
    status: 1,
  },
];

const Taskboard = ({ classes }) => {
  const [state, setState] = useState({
    open: false,
  });

  var x = 10;

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

  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <AddIcon />
        Thêm mới công việc
      </Button>
      {renderBoard()}
      {renderForm()}
    </div>
  );
};

Taskboard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Taskboard);
