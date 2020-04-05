import * as Parser from 'rss-parser';
// import { FEEDS } from './feed.constant';
// import { IFeed } from './models/i-feed';

// export const FEEDS: IFeedChannel[] = [
export const FEEDS: any = [
  {
      name: 'Harvest',
      title: 'Harvest',
      url: 'https://www.harveststatus.com/history.rss',
      isActive: true,
  },
  {
      name: 'Freshbooks',
      title: 'Freshbooks',
      url: 'https://status.freshbooks.com/history.rss',
      isActive: true,
  },
  {
      name: 'NPM',
      title: 'NPM',
      url: 'https://status.npmjs.org/history.rss',
      isActive: true,
  },
  {
      name: 'Heroku',
      title: 'Heroku',
      url: 'https://status.heroku.com/feed', // will require a parser, different format than the rest
      isActive: false,
  },
  {
      name: 'GitHub',
      title: 'GitHub',
      url: 'https://www.githubstatus.com/history.rss',
      isActive: true,
  },
  {
      name: 'Travis CI',
      title: 'Travis CI',
      url: 'https://www.traviscistatus.com/history.rss',
      isActive: true,
  },
  {
      name: 'Gitlab',
      title: 'Gitlab',
      url: 'https://status.gitlab.com/pages/5b36dc6502d06804c08349f7/rss',
      isActive: false,
  },
  {
      name: 'Digitalocean',
      title: 'Digitalocean',
      url: 'https://status.digitalocean.com/history.rss',
      isActive: true,
  },
];

function _buildFeedRequestList() {
    const rssParser = new Parser();

    return FEEDS.reduce((sum: any[], feed: any): any[] => {
        if (!feed.isActive) {
            return sum;
        }

        return [
            ...sum,
            rssParser.parseURL(feed.url),
        ];
    }, []);
}

export const getFeedList = (): Promise<any> => {
    const feedRequestList = _buildFeedRequestList();

    return Promise.all(feedRequestList)
      .then((res) => res)
      .catch((err) => {
          throw err;
      });
};
