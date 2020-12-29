import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/contact-us/DefaultPage';

describe('contact-us/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      contactUs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.contact-us-default-page').length
    ).toBe(1);
  });
});
