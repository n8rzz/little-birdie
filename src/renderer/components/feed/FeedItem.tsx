import * as React from 'react';

interface IProps {
  name: string;
  url?: string;
}

export const FeedItem: React.FC<IProps> = () => {
  return (
    <li className="providerList-item">
      <a href="#">heroku</a>
    </li>
  );
};
