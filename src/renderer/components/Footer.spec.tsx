import React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should match snapshot', () => {
    const tree = TestRenderer.create(<Footer />);

    expect(tree).toMatchSnapshot();
  });
});
