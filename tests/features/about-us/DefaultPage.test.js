import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/about-us/DefaultPage';

describe('about-us/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      aboutUs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.about-us-default-page').length
    ).toBe(1);
  });
});
