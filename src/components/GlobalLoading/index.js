import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import LoadingIcon from '../../assets/images/loading.gif';

const GlobalLoading = ({ classes, showLoading }) => {
  return showLoading ? (
    <div className={classes.globalLoading}>
      <img src={LoadingIcon} alt="loading" className={classes.icon} />
    </div>
  ) : null;
};

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const mapDispatchToProps = null;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
