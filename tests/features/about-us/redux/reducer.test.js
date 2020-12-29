import reducer from '../../../../src/features/about-us/redux/reducer';

describe('about-us/redux/reducer', () => {
  it('does nothing if no matched action', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: '__UNKNOWN_ACTION_TYPE__' }
    );
    expect(state).toBe(prevState);
  });

  // TODO: add global reducer test if needed.
});
