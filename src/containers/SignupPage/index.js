import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  withStyles,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

const SignupPage = ({ classes }) => {
  return (
    <div className={classes.background}>
      <div className={classes.signup}>
        <Card>
          <CardContent>
            <form>
              <div className="text-xs-center pb-xs">
                <Typography variant="caption">Đăng ký tài khoản</Typography>
              </div>
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
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
              <TextField
                id="cpassword"
                label="Confirm Password"
                className={classes.textField}
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control={<Checkbox value="agree" />}
                label="Tôi đã đọc chính sách và đồng ý điều khoản"
                className={classes.fullWidth}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Signup
              </Button>
              <div className="pt-1 text-md-center">
                <Link to="/login">
                  <Button>Đã có tài khoản</Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

SignupPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SignupPage);
