import React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { Header } from './Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const tree = TestRenderer.create(<Header />);

    expect(tree).toMatchSnapshot();
  });
});
