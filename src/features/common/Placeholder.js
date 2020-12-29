import React, { Component } from 'react';
import placeholder from '../../images/logo.png'

export default class Placeholder extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="common-placeholder">
        <img className='placeholder-error-loading' src={placeholder} alt="sun" />
      </div>
    );
  }
}
