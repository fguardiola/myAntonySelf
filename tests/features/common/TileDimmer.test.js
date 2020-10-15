import React from 'react';
import { shallow } from 'enzyme';
import { TileDimmer } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TileDimmer />);
  expect(renderedComponent.find('.common-tile-dimmer').length).toBe(1);
});
