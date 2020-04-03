import * as React from 'react';
import { FeedItem } from './FeedItem';

interface IProps {
  items: any;
}

export const FeedList: React.FC<IProps> = (props: IProps) => {
  if (props.items.length === 0) {
    return (
      <section>
        <div>No Feeds</div>
      </section>
    );
  }

  return (
    <section>
      <ul>
        {props.items.map((feed: any, index: number) => (
          <FeedItem
            key={`feedItem-${index}`}
            name={''}
            url={''}
          />
        ))}
      </ul>
    </section>
  );
};
