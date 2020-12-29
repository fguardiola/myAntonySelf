import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalMenu from '../common/VerticalMenu';
import Footer from '../common/Footer';
import PhoneButton from '../common/PhoneButton';
import WhatsAppButton from '../common/WhatsAppButton';


/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <div className="home-app">
        <VerticalMenu />
        <div className="page-container">{this.props.children}</div>
        <PhoneButton />
        <WhatsAppButton />
        <Footer />
      </div>
    );
  }
}
