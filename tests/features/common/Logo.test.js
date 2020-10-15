import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Logo />);
  expect(renderedComponent.find('.common-logo').length).toBe(1);
});
