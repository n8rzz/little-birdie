import * as Store from 'electron-store';

export default new Store({
  defaults: {
    lastUpdateTimestamp: 0,
    refreshInterval: 5,
    shouldNotifyOnNewAlert: true,
  }
});
