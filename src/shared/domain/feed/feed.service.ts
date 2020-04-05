import * as Parser from 'rss-parser';
import { buildFeedListWithName } from '../../build-feed-list-with-name';
import { FEEDS } from './feed.constant';
import { IFeed } from './models/i-feed';
import { IFeedChannel } from './models/i-feed-channel';

function _buildFeedRequestList(): any[] {
    const rssParser = new Parser();

    return FEEDS.reduce((sum: string[], feed: IFeedChannel): any[] => {
        if (!feed.isActive) {
            return sum;
        }

        return [
            ...sum,
            rssParser.parseURL(feed.url),
        ];
    }, []);
}

export const getFeedList = async (): Promise<IFeed[]> => {
    const feedRequestList = _buildFeedRequestList();

    return Promise.all(feedRequestList)
      .then((res: Partial<IFeed[]>) => buildFeedListWithName(res, FEEDS))
      .catch((err) => {
          throw err;
      });
};
