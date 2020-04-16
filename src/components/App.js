import React, { useState } from 'react';
// MUI stuff
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// components
import CustomizeTheme from './CustomizeTheme/index';
import ListExercise from './ListExercise/index';
import ExerciseAction from './ExerciseAction/index';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 600,
    margin: '100px auto',
    padding: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  const [exercises, setExercises] = useState([]);
  const [themeValue, setThemeValue] = useState({
    color: pink,
    type: 'light',
    size: 8,
  });

  const theme = createMuiTheme({
    palette: {
      primary: themeValue.color,
      type: themeValue.type,
    },
    spacing: themeValue.size,
  });

  const handleCreate = (title) => {
    setExercises([...exercises, { title, id: Date.now() }]);
  };
  const handleDelete = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  const handleChange = (themeValue) => setThemeValue(themeValue);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.container}>
        <Typography variant="h3" align="center" gutterBottom>
          Exercises
        </Typography>
        <CustomizeTheme handleChange={handleChange} />
        <ExerciseAction handleCreate={handleCreate} />
        <ListExercise
          exercises={exercises}
          handleDeleteExercise={handleDelete}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
