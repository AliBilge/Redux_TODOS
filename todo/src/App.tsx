import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from './Components/Todo';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>React-Redux TODO List</h1>
      </Grid.Row>

      <Grid.Row>
        <Todo />
      </Grid.Row>
    
    </Grid>
  );
}

export default App;