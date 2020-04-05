import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { IFeed } from '../../../shared/domain/feed/models/i-feed';
import { IFeedIncident } from '../../../shared/domain/feed/models/i-feed-incident';
import { isWithinHours } from './date-distance.util';

interface IProps {
  item: IFeed;
}

export const FeedItem: React.FC<IProps> = (props: IProps) => {
  const mostRecentIncident: IFeedIncident = props.item.items[0];
  const classnames = clsx({
    'providerList-item': true,
    'mix-providerList-item_hasRecentIssue': isWithinHours(24, moment(mostRecentIncident.pubDate)) && !isWithinHours(6, moment(mostRecentIncident.pubDate)),
    'mix-providerList-item_hasIssueNow': isWithinHours(6, moment(mostRecentIncident.pubDate)),
  });

  return (
    <li className={classnames}>
      <a href={props.item.link}>{ props.item.name }</a>
    </li>
  );
};
