import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const renderTextField = ({
  label, // giong label binh thuong cua input
  input, // trong prop input co cac su kien cua input: onChange, onBlur, value, disable...
  meta: { touched, invalid, error }, // truyen vao meta cua reduxform de kiem tra touch hay chua, form hop le hay khong
  ...custom // cu phat ES6, ngoai 3 props nay co the truyen them bn prop cung duoc
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid} // error khi ma nhan vao input ma input nay khong hop le
    helperText={touched && error} // hien thi o error
    {...input} // can them cac props cua input bt de co the tich hop duoc vao reduxform
    {...custom}
  />
);

renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderTextField;
