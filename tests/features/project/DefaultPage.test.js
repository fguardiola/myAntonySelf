import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/project/DefaultPage';

describe('project/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      project: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.project-default-page').length
    ).toBe(1);
  });
});
