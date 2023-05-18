import user from 'source/user.json';
import { User } from './Profile/User';

import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionsHistory } from './TransactionHistory/TransactionsHistory';

export const App = () => {
  return (
    <>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList />
      <TransactionsHistory />
    </>
  );
};
