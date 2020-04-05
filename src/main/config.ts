import * as Store from 'electron-store';
import { IFeed } from '../shared/domain/feed/models/i-feed';
import { FEEDS } from '../shared/domain/feed/feed.constant';

export default new Store({
  defaults: {
    channelList: FEEDS,
    feedList: [] as IFeed[],
    lastUpdateTimestamp: 0,
    refreshInterval: 5,
    shouldNotifyOnNewAlert: true,
  }
});
