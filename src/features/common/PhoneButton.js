import React, { Component } from 'react';
import phoneIcon from '../../images/phone2.png';
import { Button, Image } from 'semantic-ui-react'

export default class PhoneButton extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="common-phone-button">
        <a
          className=""
          href="tel://+34681058499"
        >
          <Button className='phone-button' circular size='mini' onClick={this.spanishCLicked}>
            <Image src={phoneIcon} size='mini' />
          </Button>
        </a>
      </div>
    );
  }
}
