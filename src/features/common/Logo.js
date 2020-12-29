import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png'

export default class Logo extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="common-logo">
        <Link to='/'>
          <img className='logo-image' src={logo} alt="Logo" />
          <p> Wildcares SP “Que no te corten las alas”</p>
        </Link>
      </div>
    );
  }
}
