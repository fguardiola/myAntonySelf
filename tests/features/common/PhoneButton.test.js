import React from 'react';
import { shallow } from 'enzyme';
import { PhoneButton } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PhoneButton />);
  expect(renderedComponent.find('.common-phone-button').length).toBe(1);
});
