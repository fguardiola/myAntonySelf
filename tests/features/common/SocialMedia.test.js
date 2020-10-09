import React from 'react';
import { shallow } from 'enzyme';
import { SocialMedia } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SocialMedia />);
  expect(renderedComponent.find('.common-social-media').length).toBe(1);
});
