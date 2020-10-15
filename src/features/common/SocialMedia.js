import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class SocialMedia extends Component {
  static propTypes = {};

  render() {

    return (
      <Grid className="common-social-media" columns="equal">
        <Grid.Row stretched>
          <Grid.Column className="instagram" largeScreen={8} mobile={8} tablet={8}>
            <a
              className="social-media-link center-in-parent "
              href="https://instagram.com/wildcaressp?igshid=1c9u54xp38k2h"
            >
              <b class="">Instagram</b>
            </a>
          </Grid.Column>
          <Grid.Column className="facebook" largeScreen={8} mobile={8} tablet={8}>
            <a
              className="social-media-link center-in-parent "
              href="https://youtube.com/channel/UCc0K2GtYEFZAFLbPqgzgwcw"
            >
              <b class=""> Youtube </b>
            </a>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SocialMedia;