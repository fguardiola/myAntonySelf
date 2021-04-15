import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import InfoTile from '../common/InfoTile';

export class DefaultPage extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="project-default-page">
        <InfoTile>
          <div className='info-content'>
            <h2>¿QUE ES WILDCARES SP? </h2>
            <br />
            <p> WILDCARES SP surge por querer formar parte del cambio y conseguir una relación más justa entre la sociedad y la biodiversidad. Nuestro propósito es acercar la naturaleza a todas las personas, por medio de la educación no formal y la acción. </p>

            <p> Nos ubicamos en la Provincia de Málaga, zona de gran riqueza biológica y estratégicamente clave como paso migratorio de numerosas aves rapaces y marinas, de las cuales, una gran mayoría, no llega a completar su viaje, ya sea por factores antropológicos u otros motivos. </p>

            <p> Rescatar, rehabilitar y liberar fauna salvaje es uno de los pilares fundamentales de la asociación. Así como llevar a cabo protocolos de actuación, talleres, actividades de educación ambiental y otras actuaciones con el fin de que todos y todas, puedan aportar su granito de arena a la conservación. </p>

            <p> El otro pilar en el que nos gustaría hacer hincapié es, el desarrollo de actividades adaptadas y el uso de las nuevas tecnologías con el fin de acercar el medioambiente a personas con diversidad funcional. (apostando por la inclusión y la diversidad). </p>

            <p>¡Contamos con vuestro apoyo para conseguir un mundo más justo sin parar de disfrutar y aprender de nuestro entorno!</p>
          </div>

        </InfoTile>

      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    project: state.project,
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
