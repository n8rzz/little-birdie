import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { IFeed } from '../../../shared/domain/feed/models/i-feed';
import { parsedRssMock } from '../../__mocks__/parsed-rss.mock';
import { FeedItem } from './FeedItem';

describe('FeedItem', () => {
  it('should match snapshot', () => {
    const tree = TestRenderer.create(<FeedItem item={parsedRssMock[0]} />);

    expect(tree).toMatchSnapshot();
  });

  describe('should render correct feed name', () => {
    const component = mount(<FeedItem item={parsedRssMock[0]} />);

    expect(component.text()).toEqual(parsedRssMock[0].name);
  });

  describe('when #pubDate is within last 6 hours', () => {
    it('should render the correct classNames', () => {
      const recentItemMock: IFeed = {
        ...parsedRssMock[0],
        pubDate: `${new Date()}`,
      };

      const wrapper = mount(<FeedItem item={recentItemMock} />);
      const component = wrapper.find('.providerList-item');

      expect(component.hasClass('mix-providerList-item_hasIssueNow')).toEqual(true);
    });
  });

  describe('when #pubDate is within last 24 hours', () => {
    it('should render the correct classNames', () => {
      const eightHoursAgo = new Date();

      eightHoursAgo.setHours(eightHoursAgo.getHours() - 8);

      const recentItemMock: IFeed = {
        ...parsedRssMock[0],
        pubDate: `${eightHoursAgo}`,
      };

      const wrapper = mount(<FeedItem item={recentItemMock} />);
      const component = wrapper.find('.providerList-item');

      expect(component.hasClass('mix-providerList-item_hasIssueNow')).toEqual(false);
      expect(component.hasClass('mix-providerList-item_hasRecentIssue')).toEqual(true);
    });
  });

  describe('when #pubDate is not within last 24 hours', () => {
    it('should render the correct classNames', () => {
      const twentyFiveHoursAgo = new Date();

      twentyFiveHoursAgo.setHours(twentyFiveHoursAgo.getHours() - 25);

      const recentItemMock: IFeed = {
        ...parsedRssMock[0],
        pubDate: `${twentyFiveHoursAgo}`,
      };

      const wrapper = mount(<FeedItem item={recentItemMock} />);
      const component = wrapper.find('.providerList-item');

      expect(component.hasClass('mix-providerList-item_hasIssueNow')).toEqual(false);
      expect(component.hasClass('mix-providerList-item_hasRecentIssue')).toEqual(false);
    });
  });
});
