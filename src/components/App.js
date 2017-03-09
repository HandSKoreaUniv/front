import React from 'react';
import Upper from './Upper';
import SponsoredBy from './RightSide/Sponsor';
import { Grid } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <div>
      <header>
          <Upper/>
      </header>
        <Grid padded>
        <Grid.Column width={4}>
left placeholder
        </Grid.Column>
        <Grid.Column width={8}>
center placeholder
        </Grid.Column>
        <Grid.Column width={4}>
          <SponsoredBy />
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}
export default App;
