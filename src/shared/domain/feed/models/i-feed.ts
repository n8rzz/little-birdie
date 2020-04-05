import { IFeedIncident } from './i-feed-incident';

export interface IFeed {
    description: string;
    items: IFeedIncident[];
    link: string;
    name?: string;
    pubDate: string;
    title: string;
}
