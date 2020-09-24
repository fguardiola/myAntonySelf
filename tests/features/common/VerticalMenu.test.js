import React from 'react';
import { shallow } from 'enzyme';
import { VerticalMenu } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<VerticalMenu />);
  expect(renderedComponent.find('.common-vertical-menu').length).toBe(1);
});
