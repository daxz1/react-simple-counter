import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";

export const App:React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(prevState => prevState + 1);
  const decrement = () => setCount(prevState => prevState - 1);
  return (
    <Grid
        container
        spacing={3}
        direction={"column"}
        alignItems={"center"}
        justify={"center"}
    >
        <Grid item xs={12}>
            <Typography variant="h2">Simple React Counter</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body2">
                A simple example of using {' '}
                <a href={'https://reactjs.org/docs/hooks-intro.html'} target='_blank'>React.Hooks</a> to store local state.
                Source Code can be found <a href={'https://github.com/daxz1/react-simple-counter'} target="_blank">here</a>.
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={increment}>
                <span data-testid='increment'>+</span>
            </Button>
            <Typography align={"center"}>
                <span data-testid='counter'>{count}</span>
            </Typography>
            <Button variant="contained" color="primary" onClick={decrement}>
                <span data-testid='decrement'>-</span>
            </Button>
        </Grid>
    </Grid>
  );
};

