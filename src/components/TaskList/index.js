import React from 'react';
import { withStyles, Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';
import TaskItem from '../TaskItem';

const TaskList = ({ classes, tasks, status, onClickEdit, onClickDelete }) => (
  <Grid item md={4} xs={12} key={status.value}>
    <Box mt={1} mb={1}>
      <div className={classes.status}>{status.label}</div>
    </Box>
    <div className={classes.wrapperListTask}>
      {tasks.map(task => (
        <TaskItem
          task={task}
          status={status}
          key={task.id}
          onClickEdit={() => onClickEdit(task)}
          onClickDelete={() => onClickDelete(task)}
        />
      ))}
    </div>
  </Grid>
);

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(styles)(TaskList);
