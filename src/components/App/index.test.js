import React from 'react';
import { create } from 'react-test-renderer';
import App from '.';

describe('App', () => {
  test('It renders', () => {
    const component = create(<App panels={[]} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
