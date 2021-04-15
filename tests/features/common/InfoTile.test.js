import React from 'react';
import { shallow } from 'enzyme';
import { InfoTile } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<InfoTile />);
  expect(renderedComponent.find('.common-info-tile').length).toBe(1);
});
