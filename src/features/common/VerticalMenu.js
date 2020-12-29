
import React, { Component } from 'react';
import { Menu, Button, Dimmer, Image } from 'semantic-ui-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import PropTypes from 'prop-types';
import { VERTICAL_MENU_PATHS, VERTICAL_MENU_TEXTS } from '../../common/constants';



//import { VERTICAL_MENU_PATHS } from '../../common/constants';

class VerticalMenu extends Component {
  // static propTypes = {};

  state = {};


  handleOpen = () => this.setState({ active: true });
  handleClose = () => this.setState({ active: false });


  render() {

    const { active } = this.state;

    return (
      <div className="common-vertical-menu">
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Logo />
            <div className='app-bar-buttons'>

              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleOpen}
              >
                <Button
                  className="hamburguer-button"
                  // content='Show'
                  icon="bars"
                  // labelPosition='right'
                  onClick={this.handleOpen}
                />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>

        <Dimmer active={active} onClickOutside={this.handleClose} page>
          <Menu className="vertical-menu" vertical>
            {VERTICAL_MENU_TEXTS.map((item, index) => (
              <Menu.Item>
                <Link onClick={this.handleClose} to={VERTICAL_MENU_PATHS[index]}>{item}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Dimmer>
      </div>
    );
  }
}


export default VerticalMenu;