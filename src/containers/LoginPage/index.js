import {
  Button,
  Card,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import * as authActions from '../../store/modules/auth/action';
import styles from './styles';

const LoginPage = ({ classes, handleSubmit }) => {
  const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('token', token);
  //   return <Redirect to={{ pathname: '/admin/task-board' }} />;
  // }, [token]);

  const handleSubmitForm = data => {
    const { email, password } = data;
    dispatch(authActions.signin(email, password));
  };

  return !token ? (
    <div className={classes.background}>
      <div className={classes.login}>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="text-xs-center pb-xs">
                <Typography variant="caption">Đăng nhập để tiếp tục</Typography>
              </div>
              <Field
                id="email"
                label="Email"
                className={classes.textField}
                fullWidth
                margin="normal"
                name="email"
                component={renderTextField}
              />
              <Field
                id="password"
                label="Password"
                type="password"
                className={classes.textField}
                fullWidth
                margin="normal"
                name="password"
                component={renderTextField}
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
  ) : (
    <Redirect to={{ pathname: '/admin/task-board' }} />
  );
};

LoginPage.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
};

const FORM_NAME = 'AUTH_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
});

export default compose(withStyles(styles), withReduxForm)(LoginPage);
