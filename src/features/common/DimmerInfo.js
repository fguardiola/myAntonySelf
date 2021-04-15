import React, { Component } from 'react';
import { Dimmer, Header, Icon } from 'semantic-ui-react'

export default class DimmerInfo extends Component {
  static propTypes = {

  };

  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div className="common-dimmer-info">
        {/* <Button
          content='Show'
          icon='plus'
          labelPosition='left'
          onClick={this.handleOpen}
        /> */}

        <Dimmer active={active} onClickOutside={this.handleClose} page>
          <Header as='h2' icon inverted>
            <Icon name='heart' />
            { this.props.title }
            <Header.Subheader>{this.props.description}</Header.Subheader>
          </Header>
        </Dimmer>
      </div>
    )
  }
}


