import { ipcRenderer } from 'electron';
import React, { useEffect, useCallback } from 'react';
// import { IFeed } from '../stores/feed/models/i-feed'
import { FeedList } from './feed/FeedList';
import { Header } from './Header';
import { Footer } from './Footer';

interface IProps {}

export const App: React.FC<IProps> = () => {
  const [items, setItems] = React.useState<any>([]);
  const [didMakeFeedRequest, setDidMakeFeedRequest] = React.useState<boolean>(false);

  if (!didMakeFeedRequest) {
    console.log('rss-request');

    ipcRenderer.send('rss-request');
  }

  ipcRenderer.on('rss-success', (event, data) => {
    console.log('rss-success', data);

    setItems(data);
    setDidMakeFeedRequest(!didMakeFeedRequest);
  });

  console.log('$$$', items);

  return (
    <div className="container">
      <Header />
      <FeedList items={['Github', 'travis', 'heroku']} />
      <Footer />
    </div>
  );
}
