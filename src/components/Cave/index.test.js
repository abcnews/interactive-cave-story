import React from 'react';
import { create } from 'react-test-renderer';
import Cave from '.';

describe('Cave', () => {
  test('It renders', () => {
    const component = create(<Cave config={{ shift: 0, x: 0, y: 0 }} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
