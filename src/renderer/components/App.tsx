import React from 'react';
import { ipcRenderer } from 'electron';
import { IFeed } from '../../shared/domain/feed/models/i-feed';
import { IFeedChannel } from '../../shared/domain/feed/models/i-feed-channel';
import { FeedList } from './feed/FeedList';
import { Header } from './Header';
import { Footer } from './Footer';

// TODO: abstract to `shared/`
interface IRssSuccess {
  channelList: IFeedChannel[];
  feedList: IFeed[];
}

// TODO: leverage `main` to inject data into index on initial load, then pass down as props
interface IProps {}

export const App: React.FC<IProps> = () => {
  const [channelList, setChannelList] = React.useState<IFeedChannel[]>([]);
  const [parsedFeedList, setParsedFeedList] = React.useState<IFeed[]>([]);
  const [didMakeFeedRequest, setDidMakeFeedRequest] = React.useState<boolean>(false);

  // TODO: this should go away if initial data is passed as props
  if (!didMakeFeedRequest) {
    // TODO: abstract to EventEnum
    ipcRenderer.send('rss-request');
  }

  // TODO: abstract to EventEnum
  ipcRenderer.on('rss-success', (event, data: IRssSuccess) => {
    setChannelList(data.channelList);
    setParsedFeedList(data.feedList);
    setDidMakeFeedRequest(!didMakeFeedRequest);
  });

  return (
    <div className="container">
      <Header />
      <FeedList channelList={channelList} feedList={parsedFeedList} />
      <Footer />
    </div>
  );
}
