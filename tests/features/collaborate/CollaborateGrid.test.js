import React from 'react';
import { shallow } from 'enzyme';
import { CollaborateGrid } from '../../../src/features/collaborate';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CollaborateGrid />);
  expect(renderedComponent.find('.collaborate-collaborate-grid').length).toBe(1);
});
