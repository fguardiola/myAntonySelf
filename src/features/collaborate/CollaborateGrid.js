import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CollaborateInfo from './CollaborateInfo';


export default class CollaborateGrid extends Component {
  static propTypes = {

  };

  render() {
    // const data = tileData.collaborate;
    return (
      <Grid className="page-grid collaborate-collaborate-grid" columns="equal">
        <Grid.Row stretched className="collaborate-grid-row">
          <Grid.Column largeScreen={16} mobile={16} tablet={16}>
            {/* Main tile */}
            <CollaborateInfo />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
