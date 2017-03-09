import React from 'react';
import Upper from './Upper';
import { Grid } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <div>
      <header>
          <Upper/>
      </header>
        <Grid>
        <Grid.Column width={4}>
left placeholder
        </Grid.Column>
        <Grid.Column width={8}>
center placeholder
        </Grid.Column>
        <Grid.Column width={4}>
rightbar placeholder
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}
export default App;
