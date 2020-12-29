import React from 'react';
import { shallow } from 'enzyme';
import { WhatsAppButton } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<WhatsAppButton />);
  expect(renderedComponent.find('.common-whats-app-button').length).toBe(1);
});
