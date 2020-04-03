import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';

import { FeedItem } from './FeedItem';

describe('FeedItem', () => {
  const props = {
    name: 'Github',
    url: 'http://github.com',
  };

  it('should match snapshot', () => {
    const tree = TestRenderer.create(<FeedItem name={props.name} url={props.url} />);

    expect(tree).toMatchSnapshot();
  });
});
