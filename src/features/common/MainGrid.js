import React, { Component } from 'react';
import { Grid, Image, Segment, GridColumn } from 'semantic-ui-react';
import tileData from '../../common/tileData';
import Tile from './Tile';
import SocialMedia from './SocialMedia';

import PropTypes from 'prop-types';

export default class MainGrid extends Component {
  // static propTypes = {};

  render() {
    const data = tileData.home;
    return (
      <Grid className='page-grid' columns="equal">

        {/* Introduccion */}
        <Grid.Row stretched>
          <Grid.Column largeScreen={16} mobile={16} tablet={16}>
            {/* Welcome tile */}
            <Tile
              key={1}
              reveal={data[2].reveal}
              revealText={data[2].revealText}
              link={false}
              imgUrl={data[2].imgUrl}
              title={data[2].title}
              description={data[2].description}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            <Tile
              key={1}
              reveal={data[0].reveal}
              revealText={data[0].revealText}
              link={true}
              to='/pictures'
              imgUrl={data[0].imgUrl}
              title={data[0].title}
              description={data[0].description}
            />
          </Grid.Column>
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            {/* Rooms and facilities */}
            <Tile
              key={4}
              reveal={data[3].reveal}
              link={true}
              to="/rooms-facilities"
              imgUrl={data[3].imgUrl}
              title={data[3].title}
              description={data[3].description}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            {/* Granada & albaicin  */}
            <Tile
              key={5}
              reveal={data[4].reveal}
              revealText={data[4].revealText}
              link={true}
              to="/granada-and-albaicin"
              imgUrl={data[4].imgUrl}
              title={data[4].title}
              description={data[4].description}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column largeScreen={16} mobile={16} tablet={16}>
            <Tile
              key={6}
              link={false}
              reveal={data[6].reveal}
              revealText={data[6].revealText}
              imgUrl={data[6].imgUrl}
              title={data[6].title}
              description={data[6].description}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {/* Seccion  */}
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>

            <Tile
              key={8}
              reveal={data[7].reveal}
              revealText={data[7].revealText}
              link={false}
              imgUrl={data[7].imgUrl}
              title={data[7].title}
            />
          </Grid.Column>
          {/* Section */}
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            <Tile
              key={9}
              reveal={data[8].reveal}
              revealText={data[8].revealText}
              link={true}
              to='about-us'
              imgUrl={data[8].imgUrl}
              title={data[8].title}
              description={data[8].description}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            {/*  Section*/}
            <Tile
              key={7}
              reveal={data[9].reveal}
              revealText={data[9].revealText}
              link={false}
              imgUrl={data[9].imgUrl}
              title={data[9].title}
              description={data[9].description}
            />
          </Grid.Column>
          {/* Social media links */}
          <Grid.Column largeScreen={8} mobile={16} tablet={16}>
            <SocialMedia />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
