import React from 'react';
import { Modal, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import styles from './styles';

const ModalApp = ({ classes, open, component, modalActionCreators, title }) => {
  const { hideModal } = modalActionCreators;
  // console.log('modal action creator', modalActionsCreators);
  return (
    <Modal open={open} onClose={hideModal}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <span className={classes.title}>{title}</span>
          <CloseIcon className={classes.icon} onClick={hideModal} />
        </div>
        <div className={classes.content}>{component}</div>
      </div>
    </Modal>
  );
};

ModalApp.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  open: PropTypes.bool,
  component: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = state => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(ModalApp);
