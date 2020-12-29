import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/collaborate/DefaultPage';

describe('collaborate/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      collaborate: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.collaborate-default-page').length
    ).toBe(1);
  });
});
