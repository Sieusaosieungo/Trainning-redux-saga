const validate = values => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors.title = 'Vui lòng nhập title';
  } else if (title.trim() && title.length < 5) {
    errors.title = 'Tiêu đề phải có 5 ký tự';
  }
  return errors;
};

export default validate;
