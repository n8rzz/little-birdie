import { IFeed } from './domain/feed/models/i-feed';
import { IFeedChannel } from './domain/feed/models/i-feed-channel';

export function buildFeedListWithName(feedList: Partial<IFeed[]>, feedDict: IFeedChannel[]): IFeed[] {
  return feedList.reduce((sum: any[], feed: any): any[] => {
      const itemFeed = feedDict.filter((item: any): any => {
          const lowerCaseTitle = feed.title.toLowerCase();

          return lowerCaseTitle.indexOf(item.name.toLowerCase()) !== -1;
      })[0];

      return [
          ...sum,
          {
              ...feed,
              name: itemFeed.name,
          },
      ];
  }, []);
}
