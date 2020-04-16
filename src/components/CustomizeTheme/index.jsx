import React, { useState, useEffect, Fragment } from 'react';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { customizes } from './config';

const useStyles = makeStyles((theme) => ({
  customize: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: 120,
  },
}));

export default function ({ handleChange }) {
  const classes = useStyles();
  const [state, setState] = useState({
    color: pink,
    type: 'light',
    size: 8,
  });

  const onChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  useEffect(() => {
    handleChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const showCustomizes = () => (
    <Fragment>
      {customizes.map((customize, index) => {
        const value =
          customize.name === 'color'
            ? state.color
            : customize.name === 'type'
            ? state.type
            : state.size;
        return (
          <FormControl key={index} className={classes.formControl}>
            <InputLabel>{customize.title}</InputLabel>
            <Select name={customize.name} value={value} onChange={onChange}>
              {customize.datas.map((data, option) => (
                <MenuItem key={option} value={data.value}>
                  {data.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      })}
    </Fragment>
  );

  return <div className={classes.customize}>{showCustomizes()}</div>;
}
