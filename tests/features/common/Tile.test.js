import React from 'react';
import { shallow } from 'enzyme';
import { Tile } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Tile />);
  expect(renderedComponent.find('.common-tile').length).toBe(1);
});
