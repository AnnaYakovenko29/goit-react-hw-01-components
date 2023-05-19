import user from 'source/user.json';
import { User } from './Profile/User';

import data from 'source/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from 'source/data.json';
import { FriendList } from './FriendList/FriendList';

import transactions from 'source/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionsHistory';

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
