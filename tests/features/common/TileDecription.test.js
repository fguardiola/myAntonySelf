import React from 'react';
import { shallow } from 'enzyme';
import { TileDecription } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TileDecription />);
  expect(renderedComponent.find('.common-tile-decription').length).toBe(1);
});
