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
            <Button variant="contained" color="primary" onClick={increment}>
                +
            </Button>
            <Typography align={"center"}>{count}</Typography>
            <Button variant="contained" color="primary" onClick={decrement}>
                -
            </Button>
        </Grid>
    </Grid>
  );
};

