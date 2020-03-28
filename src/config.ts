import * as Store from 'electron-store';

export default new Store({
  defaults: {
    refreshInterval: 5,
    shouldNotifyOnNewAlert: true,
  }
});
