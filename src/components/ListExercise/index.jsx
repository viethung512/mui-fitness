import React from 'react';

// MUI stuff
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  exercises: {},
}));

export default function ({ exercises, handleDeleteExercise }) {
  const classes = useStyles();
  const handleDelete = (id) => handleDeleteExercise(id);
  return (
    <List className={classes.exercises}>
      {exercises.map((exercise, index) => (
        <ListItem key={index} className={classes.exercise}>
          <ListItemText
            primary={exercise.title}
            className={classes.exerciseTitle}
          />
          <ListItemIcon>
            <IconButton
              color="primary"
              onClick={() => handleDelete(exercise.id)}
              className={classes.exerciseAction}
            >
              <DeleteIcon className={classes.exerciseActionBtn} />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
