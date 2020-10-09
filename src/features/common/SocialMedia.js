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
              href="https://www.instagram.com/"
            >
              <b class="">Instagram</b>
            </a>
          </Grid.Column>
          <Grid.Column className="facebook" largeScreen={8} mobile={8} tablet={8}>
            <a
              className="social-media-link center-in-parent "
              href="https://www.facebook.com/"
            >
              <b class=""> Facebook </b>
            </a>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SocialMedia;