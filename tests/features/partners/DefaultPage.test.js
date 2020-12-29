import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/partners/DefaultPage';

describe('partners/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      partners: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.partners-default-page').length
    ).toBe(1);
  });
});
