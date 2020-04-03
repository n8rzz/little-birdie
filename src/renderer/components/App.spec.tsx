import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { App } from './App';

describe('App', () => {
  it('should match snapshot', () => {
    const tree = TestRenderer.create(<App />);

    expect(tree).toMatchSnapshot();
  });
});
