import React, { Component } from 'react';

export default class InfoTile extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="common-info-tile">
        {this.props.children}
      </div>
    );
  }
}
