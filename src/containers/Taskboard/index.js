import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box } from '@material-ui/core';
import styles from './styles';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import SearchBox from '../../components/SearchBox';

const Taskboard = ({
  classes,
  taskActionCreators,
  modalActionCreators,
  listTask,
}) => {
  // const [state, setState] = useState({
  //   open: false,
  // });

  // useEffect(() => {
  //   const { fetchListTask } = taskActionCreators;
  //   fetchListTask();
  // }, []);

  const handleEditTask = task => {
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(task);

    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;

    showModal();
    changeModalTitle('Cập nhật công việc');
    changeModalContent(<TaskForm />);
  };

  const showModalDeleteTask = task => {
    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;

    showModal();
    changeModalTitle('Xóa công việc');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa{' '}
          <span className={classes.modalConfirmTextBold}>{task.title}</span>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
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
    );
  };

  const handleDeleteTask = task => {
    const { id } = task;
    const { deleteTask } = taskActionCreators;
    deleteTask(id);
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
              tasks={taskFiltered}
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
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />);
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
    </div>
  );
};

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditing: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
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
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard),
);
