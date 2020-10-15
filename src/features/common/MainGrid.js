import React, { Component } from 'react';
import { Grid, Image, Segment, GridColumn } from 'semantic-ui-react';
import tileData from '../../common/tileData';
// import Tile from './Tile';
import TileDimmer from './TileDimmer';


import SocialMedia from './SocialMedia';

import PropTypes from 'prop-types';

export default class MainGrid extends Component {
  // static propTypes = {};

  render() {
    const data = tileData.home;
    return (
      <Grid className='page-grid' columns="equal">

        {/* Novedades */}
        <Grid.Row stretched>
          <Grid.Column largeScreen={16} mobile={16} tablet={16}>
            {/* Welcome tile */}
            <TileDimmer
              key={1}
              reveal={data[0].reveal}
              revealText={data[0].revealText}
              link={false}
              imgUrl={data[0].imgUrl}
              title={data[0].title}
              description={data[0].description}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {/* Proyecto */}
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            <TileDimmer
              key={2}
              reveal={data[1].reveal}
              revealText={data[1].revealText}
              link={true}
              to='/pictures'
              imgUrl={data[1].imgUrl}
              title={data[1].title}
              description={data[1].description}
            />
          </Grid.Column>
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            {/* Actividades */}
            <TileDimmer
              key={3}
              reveal={data[2].reveal}
              link={true}
              to="/rooms-facilities"
              imgUrl={data[2].imgUrl}
              title={data[2].title}
              description={data[2].description}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            {/* Control  */}
            <TileDimmer
              key={4}
              reveal={data[3].reveal}
              revealText={data[3].revealText}
              link={true}
              to="/granada-and-albaicin"
              imgUrl={data[3].imgUrl}
              title={data[3].title}
              description={data[3].description}
            />
          </Grid.Column >
          {/* Social media */}
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            <SocialMedia />
          </Grid.Column>
        </Grid.Row>
        {/* Donativos */}
        <Grid.Row stretched>
          <Grid.Column largeScreen={16} mobile={16} tablet={16}>
            {/* Welcome tileDimmer */}
            <TileDimmer
              key={5}
              reveal={data[4].reveal}
              revealText={data[4].revealText}
              link={false}
              imgUrl={data[4].imgUrl}
              title={data[4].title}
              description={data[4].description}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
