import React from 'react';
import Upper from './Upper';
import SponsoredBy from './RightSide/Sponsor';
import LeftMenu from './LeftSide/LeftMenu';
import ArticleView from './Center/ArticleView';
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
          <LeftMenu />
        </Grid.Column>
        <Grid.Column width={8}>
          <ArticleView />
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
