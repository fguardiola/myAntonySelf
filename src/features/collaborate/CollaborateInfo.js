import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class CollaborateInfo extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="collaborate-collaborate-info">
        <List>
          <List.Item>
            <List.Icon name='angle right' />
            <List.Content>
              <List.Header> Donaciones</List.Header>
              <List.Description> Tipo de donaciones </List.Description>
              <List.List>
                <p> Donación Mensual (5,10,50 € y otra cantidad)</p>
                <p> Donación Trimestral (10, 30, 60€, y otra cantidad)</p>
                <p> Donación Anual (30, 60, 100€ y otra cantidad)</p>

              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='angle right' />
            <List.Content>
              <List.Header>  Socios:  </List.Header>
              <List.Description> Tipos de Socios</List.Description>
              <List.List>
                <p> Máster: Es el rango máximo de Socio. Se adquiere con las donaciones mensuales de 50€ u otra cantidad superior, y las Trimestrales y Anuales de otras cantidades superiores a 60€ trimestrales y 100€ Anuales.</p>
                <p> Diamond: Se adquiere con las donaciones mensuales de 10€, las trimestrales de 50€ y las anuales de 100€.</p>
                <p> Platinum: Se adquiere con las donaciones mensuales de 5€, trimestrales de 30€ y anuales de 60€.</p>
                <p> Gold: Se adquiere solo con las donaciones trimestrales de 10€ y las anuales de 30€.</p>
                <p> Básico: Se adquiere solo con la donación anual de 25€.</p>
                <p> Socio Joven/Desempleado: Se adquiere con una Donación anual de 15€ y la justificación de ser menor de 25 años u estar desempleado.</p>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='angle right' />
            <List.Content>
              <List.Header> Beneficios Socios</List.Header>
              <List.Description>Beneficios</List.Description>
              <List.List>
                <p> Máster: Beneficio del socio básico + Derecho a asistir a todas las liberaciones y posibilidad de liberar dos aves al año +Una visita gratis al centro + participación gratuita a un taller a elección de la organización.</p>
                <p> Diamond: Beneficio del socio básico + Derecho a asistir a todas las liberaciones y posibilidad de liberar a un ave.</p>
                <p> Platinum: Beneficio del socio básico + Derecho a asistir a todas las liberaciones y una visita gratis al centro.</p>
                <p> Gold: Beneficio del socio básico +derecho a asistir a tres liberaciones.</p>
                <p> Básico: Obtención de la revista anual de la fundación e información detallada sobre algunas actividades e individuos.</p>
                <p> Joven/Desempleado: Se obtienen las mismas recompensas que el socio Gold.</p>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='angle right' />
            <List.Content>
              <List.Header>Apadrina:</List.Header>
              <List.Description>Descripción</List.Description>
              <List.List>
                <p> Por X€ (Cantidad variable según la especie, pero con un mínimo de 30€) se proporcionará una carta con su historial clínico, un diploma de apadrinamiento, una ficha de la especie y fotografías, así como diverso material que se le pueda facilitar sobre la especie. En algunos casos, el padrino tiene la posibilidad de liberar al animal. En los casos que el padrino no pueda liberarlos, siempre podrán asistir a su liberación o en su defecto a una visita anual al centro.</p>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='angle right' />
            <List.Content>
              <List.Header>	WildSupporters: </List.Header>
              <List.Description>Descripción</List.Description>
              <List.List>
                <p> 1euro/mes -> 12euros/año. Consistiría en donaciones de la gente de 1 euro al mes, renovable o con posibilidad de cancelarlo anualmente. Suponiendo una donación pequeña de voluntad a la entidad, pero de mucho valor para el centro y que permite la participación en el blog.</p>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='angle right' />
            <List.Content>
              <List.Header> Voluntariado:  </List.Header>
              <List.Description>Pasos a seguir</List.Description>
              <List.List>
                <p> poner el mail de contacto en este apartado y que pongan asunto Voluntariado. Tipos de voluntariado: Próximamente</p>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='angle right' />
            <List.Content>
              <List.Header> Listado de Amazon: </List.Header>
              <List.Description>Próximamente.</List.Description>
              {/* <List.List>
                <p> Próximamente.</p>
              </List.List> */}
            </List.Content>
          </List.Item>

        </List>
      </div>
    );
  }
}
