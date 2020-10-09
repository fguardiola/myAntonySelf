import React from 'react';
import { shallow } from 'enzyme';
import { MainGrid } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MainGrid />);
  expect(renderedComponent.find('.common-main-grid').length).toBe(1);
});
