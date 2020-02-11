import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

const LoginPage = ({ classes }) => {
  return (
    <div className={classes.background}>
      <div className={classes.login}>
        <Card>
          <CardContent>
            <form>
              <div className="text-xs-center pb-xs">
                <Typography variant="caption">Đăng nhập để tiếp tục</Typography>
              </div>
              <TextField
                id="email"
                label="Email"
                // className={classes.textField}
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                label="Password"
                className={classes.textField}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Login
              </Button>
              <div className="pt-1 text-md-center">
                <Link to="/signup">
                  <Button>Đăng ký tài khoản mới</Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(LoginPage);
