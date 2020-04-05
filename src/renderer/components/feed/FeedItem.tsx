import React from 'react';
import { IFeed } from '../../../shared/domain/feed/models/i-feed';

interface IProps {
  item: IFeed;
}

export const FeedItem: React.FC<IProps> = (props: IProps) => {
  return (
    <li className="providerList-item">
      <a href={props.item.link}>{ props.item.name }</a>
    </li>
  );
};
