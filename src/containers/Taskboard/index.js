import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import queryString from 'query-string';
import styles from './styles';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';
import * as taskActions from '../../store/modules/task/action';
import * as modalActions from '../../store/modules/modal/action';
import SearchBox from '../../components/SearchBox';

const Taskboard = props => {
  const { classes, location } = props;
  const { status: statusRoute } = queryString.parse(location.search);

  const listTask = useSelector(state => state.task.listTask);
  const dispatch = useDispatch();

  const handleEditTask = task => {
    dispatch(taskActions.setTaskEditing(task));
    dispatch(modalActions.showModal());
    dispatch(modalActions.changeModalTitle('Cập nhật công việc'));
    dispatch(modalActions.changeModalContent(<TaskForm />));
  };

  const showModalDeleteTask = task => {
    dispatch(modalActions.showModal());
    dispatch(modalActions.changeModalTitle('Xóa công việc'));
    dispatch(
      modalActions.changeModalContent(
        <div className={classes.modalDelete}>
          <div className={classes.modalConfirmText}>
            Bạn chắc chắn muốn xóa{' '}
            <span className={classes.modalConfirmTextBold}>{task.title}</span>?
          </div>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button
                variant="contained"
                onClick={() => dispatch(modalActions.hideModal())}
              >
                Hủy bỏ
              </Button>
            </Box>
            <Box />
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDeleteTask(task)}
              >
                Đồng ý
              </Button>
            </Box>
            <Box />
          </Box>
        </div>,
      ),
    );
  };

  const handleDeleteTask = task => {
    const { id } = task;
    dispatch(taskActions.deleteTask(id));
  };

  const renderBoard = () => {
    let xhtml = null;

    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value,
          );

          return (
            <TaskList
              tasks={taskFiltered.filter(item => {
                return statusRoute
                  ? item.status.toString() === statusRoute
                  : true;
              })}
              status={status}
              key={status.value}
              onClickEdit={handleEditTask}
              onClickDelete={showModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  const openForm = () => {
    dispatch(taskActions.setTaskEditing(null));
    dispatch(modalActions.showModal());
    dispatch(modalActions.changeModalTitle('Thêm mới công việc'));
    dispatch(modalActions.changeModalContent(<TaskForm />));
  };

  const loadData = () => {
    dispatch(taskActions.fetchListTask());
  };

  const handleFilter = e => {
    const { value } = e.target;
    dispatch(taskActions.filterTask(value));
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
    </div>
  );
};

Taskboard.propTypes = {
  classes: PropTypes.object,
  location: PropTypes.object,
};

export default withStyles(styles)(Taskboard);
