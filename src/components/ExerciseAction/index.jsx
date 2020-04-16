import React, { useState } from 'react';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/amber';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  formInput: {
    flex: '1',
    marginRight: 24,
  },
  formBtnSubmit: {
    color: white,
  },
}));

export default function ({ handleCreate }) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({
    title: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && title.trim('').length > 0) {
      handleCreate(title);
      setTitle('');
    } else {
      setErrors({
        title: 'Must not be empty',
      });
    }
  };

  const handleChange = (e) => setTitle(e.target.value);

  const handleForcus = () => {
    setErrors({ title: null });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        name="title"
        label="Exercises"
        value={title}
        onChange={handleChange}
        margin="none"
        className={classes.formInput}
        error={errors.title ? true : false}
        helperText={errors.title}
        onFocus={handleForcus}
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={classes.formBtnSubmit}
      >
        Create
      </Button>
    </form>
  );
}
