import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TileDecription extends Component {
  static propTypes = {

  };
  constructor() {
    super()
    this.state = {
      mouseOver: false,
    }
  }


  // mouseEnter = () => this.setState({ mouseOver: true });
  mouseLeave = () => this.setState({ mouseOver: false });
  toogleState = () => {
    this.props.reveal && this.setState({ mouseOver: !this.state.mouseOver })
  }
  render() {
    return (

      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        className="tile-description"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        // onTouchStart={this.toogleState}
        onClick={this.toogleState}
      >

        {
          this.props.reveal && this.state.mouseOver &&
          <div className='reveal-text center-in-parent' >
            {this.props.revealText && <p className="tile-reveal center-in-parent">{this.props.revealText}</p>}
          </div>
        }
        {
          this.props.reveal && !this.state.mouseOver &&
          <div className='center-in-parent'>
            <h4 className="tile-info">
              <b className="tile-title">{this.props.title}</b>
            </h4>
            {this.props.description && <p className="tile-info">{this.props.description}</p>}
          </div>
        }
        {
          !this.props.reveal &&
          <div className='center-in-parent'>
            <h4 className="tile-info">
              <b className="tile-title">{this.props.title}</b>
            </h4>
            {this.props.description && <p className="tile-info">{this.props.description}</p>}
          </div>
        }
      </ReactCSSTransitionGroup>
      //   <div 
      //     className="tile-description"
      //     onMouseEnter={this.mouseEnter}
      //     onMouseLeave={this.mouseLeave}
      //     >
      //   {
      //     this.props.reveal && this.state.mouseOver && 
      //     <div className='reveal-text center-in-parent' >
      //       {this.props.revealText && <p className="tile-info">{this.props.revealText}</p>}
      //     </div>
      //   }
      //   {
      //      !this.state.mouseOver  && 
      //      <div className='center-in-parent'> 
      //         <h4 className="tile-info">
      //           <b className="tile-title">{this.props.title}</b>
      //         </h4>
      //         {this.props.description && <p className="tile-info">{this.props.description}</p>}
      //      </div>
      //   }
      // </div>
    );
  }
}

