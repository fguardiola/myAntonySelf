import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react'
import wpIcon from '../../images/wpIcon.png';

export default class WhatsAppButton extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="common-whats-app-button">

        <a
          className=""
          href="whatsapp://send?phone=34681058499"
        >
          <Button className='whatsapp-button' circular size='mini' onClick={this.spanishCLicked}>
            <Image src={wpIcon} size='mini' />
          </Button>
        </a>

      </div>
    );
  }
}
