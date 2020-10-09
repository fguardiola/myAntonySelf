import React from 'react';
import { shallow } from 'enzyme';
import { ImagePlaceholder } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ImagePlaceholder />);
  expect(renderedComponent.find('.common-image-placeholder').length).toBe(1);
});
