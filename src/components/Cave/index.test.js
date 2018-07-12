const React = require('react');
const renderer = require('react-test-renderer');

const Cave = require('.');

describe('Cave', () => {
  test('It renders', () => {
    const component = renderer.create(<Cave config={{ shift: 0, x: 0, y: 0 }} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
