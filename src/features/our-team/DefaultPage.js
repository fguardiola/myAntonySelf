import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    ourTeam: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="our-team-default-page">
        Page Content: our-team/DefaultPage
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    ourTeam: state.ourTeam,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
