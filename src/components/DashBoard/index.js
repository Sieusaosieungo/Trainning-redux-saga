import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import cn from 'classnames';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';
import * as uiActions from '../../store/modules/ui/action';

const Dashboard = ({ children, classes, name, open, uiActionsCreators }) => {
  const handleToggleSidebar = value => {
    const { showSidebar, hideSidebar } = uiActionsCreators;
    if (value) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };
  return (
    <div className={classes.dashboard}>
      <Header
        name={name}
        showSidebar={open}
        onToggleSidebar={handleToggleSidebar}
      />
      <div className={classes.wrapper}>
        <Sidebar showSidebar={open} onToggleSidebar={handleToggleSidebar} />
        <div
          className={cn(classes.wrapperContent, {
            [classes.shiftLeft]: open === false,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
  open: PropTypes.bool,
  uiActionsCreators: PropTypes.shape({
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  open: state.ui.showSidebar,
});

const mapDispatchToProps = dispatch => ({
  uiActionsCreators: bindActionCreators(uiActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
