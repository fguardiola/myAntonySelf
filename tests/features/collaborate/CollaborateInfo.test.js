import React from 'react';
import { shallow } from 'enzyme';
import { CollaborateInfo } from '../../../src/features/collaborate';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CollaborateInfo />);
  expect(renderedComponent.find('.collaborate-collaborate-info').length).toBe(1);
});
