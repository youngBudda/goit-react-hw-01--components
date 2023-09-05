import css from 'components/friendList/friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/friendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
