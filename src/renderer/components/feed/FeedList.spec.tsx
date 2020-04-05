import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { feedChannelMock } from '../../__mocks__/feed-channel.mock';
import { parsedRssMock } from '../../__mocks__/parsed-rss.mock';
import { FeedList } from './FeedList';

describe('FeedList', () => {
  it('should match snapshot', () => {
    const tree = TestRenderer.create(<FeedList channelList={feedChannelMock} feedList={parsedRssMock} />);

    expect(tree).toMatchSnapshot();
  });

  describe('when passed an empty #feedList', () => {
    it('should render default text', () => {
      const component = mount(<FeedList channelList={feedChannelMock} feedList={[]} />);

      expect(component.text()).toEqual('No Feeds');
    });
  });
});
