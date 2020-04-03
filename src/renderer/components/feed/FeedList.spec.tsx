import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import { FeedList } from './FeedList';

describe('FeedList', () => {
  const props = {
    items: ['Github', 'npm', 'Digital Ocean'],
  };

  it('should match snapshot', () => {
    const tree = TestRenderer.create(<FeedList items={props.items} />);

    expect(tree).toMatchSnapshot();
  });

  describe('when passed an empty #feedList', () => {
    it('should render default text', () => {
      const { getByText } = render(<FeedList items={[]} />);

      expect(getByText('No Feeds')).not.toBeUndefined();
    });
  });
});
