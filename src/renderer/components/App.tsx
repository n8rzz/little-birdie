import React, { useEffect, useCallback } from 'react';
import { getFeedList } from '../stores/feed/feed.service'
import { IFeed } from '../stores/feed/models/i-feed'
import { FeedList } from './feed/FeedList';
import { Header } from './Header';
import { Footer } from './Footer';

interface IProps {}

export const App: React.FC<IProps> = () => {
  // const [items, setItems] = React.useState<IFeed[]>([]);

  useEffect(() => getParsedFeedRss);

  const getParsedFeedRss = useCallback(async () => {
    console.log('===');
    Promise.resolve(true);
    // const feeds = await getFeedList();

    // setItems(feeds);
  }, []);

  console.log('$$$');

  return (
    <div className="container">
      <Header />
      <FeedList items={['Github', 'travis', 'heroku']} />
      <Footer />
    </div>
  );
}
