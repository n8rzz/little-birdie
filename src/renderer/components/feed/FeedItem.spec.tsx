import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { parsedRssMock } from '../../__mocks__/parsed-rss.mock';
import { FeedItem } from './FeedItem';

describe('FeedItem', () => {
  it('should match snapshot', () => {
    const tree = TestRenderer.create(<FeedItem item={parsedRssMock[0]} />);

    expect(tree).toMatchSnapshot();
  });

  describe('should render correct feed name', () => {
    const { getByText } = render(<FeedItem item={parsedRssMock[0]} />);

    expect(getByText(parsedRssMock[0].name)).not.toBeUndefined();
  });
});
