import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


export default class Footer extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div >
        <Grid columns='equal'  >
          <Grid.Row className="common-footer">
            <Grid.Column largeScreen={16} mobile={16} tablet={16}>
              <div className="footer-info">
                <p><b>tlf :681058499</b></p>
                <p><b>mail: wildcares2@gmail.com</b></p>
                <p><b>dirección :Málaga</b></p>
                <p><b>©2020 Copyright Clearance Center, Inc. All rights reserved.</b></p>
              </div>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
