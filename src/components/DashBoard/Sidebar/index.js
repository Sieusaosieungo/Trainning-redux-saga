import React from 'react';
import { withStyles, Drawer, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styles';
import { ADMIN_ROUTES } from '../../../constants';

const SideBar = ({ classes, showSidebar, onToggleSidebar }) => {
  const toggleDrawer = value => {
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  };

  const renderList = () => {
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map(item => {
            return (
              <NavLink
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
                key={item.path}
              >
                <ListItem key={item.path} className={classes.menuItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };

  return (
    <Drawer
      open={showSidebar}
      onClose={() => toggleDrawer(false)}
      classes={{ paper: classes.drawerPaper }}
      variant="persistent"
    >
      {renderList()}
    </Drawer>
  );
};

SideBar.propTypes = {
  classes: PropTypes.object,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};

export default withStyles(styles)(SideBar);
