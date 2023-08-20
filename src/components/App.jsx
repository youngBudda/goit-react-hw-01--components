import css from 'components/app.module.css';
import userData from 'components/profile/user.json';
import Profile from './profile/Profile';
import data from './statistics/data.json';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import transactions from './transactionHistory/transactions.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
