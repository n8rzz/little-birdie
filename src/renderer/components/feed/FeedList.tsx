import React from 'react';
import { IFeed } from '../../../shared/domain/feed/models/i-feed';
import { IFeedChannel } from '../../../shared/domain/feed/models/i-feed-channel';
import { FeedItem } from './FeedItem';

interface IProps {
  channelList: IFeedChannel[];
  feedList: IFeed[];
}

export const FeedList: React.FC<IProps> = (props: IProps) => {
  if (props.feedList.length === 0) {
    return (
      <section>
        <div>No Feeds</div>
      </section>
    );
  }

  return (
    <section>
      <ul>
        {props.feedList.map((feed: IFeed) => (
          <FeedItem
            key={feed.name}
            item={feed}
          />
        ))}
      </ul>
    </section>
  );
};
