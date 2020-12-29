import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/activities/DefaultPage';

describe('activities/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      activities: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.activities-default-page').length
    ).toBe(1);
  });
});
