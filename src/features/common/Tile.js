import React, { Component } from 'react';
import TileDecription from './TileDecription';
import { COLORS } from '../../common/constants';
import { Link } from 'react-router-dom';
import ImagePlaholder from './ImagePlaceholder.js';
import Placeholder from './Placeholder';
import PropTypes from 'prop-types';


class Tile extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      mouseOver: false,
      imageLoaded: false,
      imageError: false,
      backgroundColor: this.randomBackground()
    };
  }

  // mouseEnter = () => this.setState({ ...this.state, mouseOver: true });
  // mouseLeave = () => this.setState({ ...this.state, mouseOver: false });
  handleImageLoaded = () => {
    this.setState({ ...this.state, imageLoaded: true });
  };
  randomBackground = () => COLORS[Math.floor(Math.random() * COLORS.length)]

  handleImageErrored = () => this.setState({ ...this.state, imageError: true });

  render() {


    const link = (
      <div className="tile-style link">
        <Link
          to={this.props.to}
          style={{ opacity: this.state.mouseOver ? '0.7' : '1' }}
        // onMouseEnter={this.mouseEnter}
        // onMouseLeave={this.mouseLeave}
        >
          {/* <ImagePlaholder height='300px' width='300px' /> */}
          {
            this.state.imageError && <Placeholder />
          }
          {/* <div style={{ display: this.state.imageError ? 'block' : 'none', height: "500px", width: "100%", backgroundColor: this.randomBackground() }}></div> */}
          <div style={{ display: this.state.imageLoaded || this.state.imageError ? 'none' : 'block' }}>
            <ImagePlaholder height="500px" width="100%" />
          </div>
          <img
            className="tile-image"
            src={this.props.imgUrl}
            alt="Avatar"
            onLoad={this.handleImageLoaded}
            onError={this.handleImageErrored}
            style={{ backgroundColor: this.state.backgroundColor, display: !this.state.imageLoaded ? 'none' : 'block' }}
          />
          <TileDecription
            reveal={this.props.reveal}
            revealText={this.props.revealText}
            title={this.props.title}
            description={this.props.description}
          />
        </Link>
      </div>
    );

    const tile = (
      <div className="tile-style">
        {
          this.state.imageError && <Placeholder />
        }
        {/* <Placeholder style={{ display: this.state.imageError ? 'block' : 'none', height: "500px", width: "100%", backgroundColor: this.randomBackground() }}></Placeholder> */}
        <div style={{ display: this.state.imageLoaded || this.state.imageError ? 'none' : 'block' }}>
          <ImagePlaholder height="500px" width="100%" />
        </div>
        <img
          className="tile-image"
          src={this.props.imgUrl}
          alt="Avatar"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
          style={{ backgroundColor: this.state.backgroundColor, display: !this.state.imageLoaded ? 'none' : 'block' }}
        />
        <TileDecription
          reveal={this.props.reveal}
          revealText={this.props.revealText}
          title={this.props.title}
          description={this.props.description}
        />
      </div>
    );
    // console.log(this.props.link);
    //  let element = <div clasname = 'placeholder'>Loading...</div>
    //  if(this.state.imageLoaded){
    //     element = this.props.link ? link : tile;
    //  }
    const element = this.props.link ? link : tile;
    //  console.log(element)
    return element;
  }
}

export default Tile;