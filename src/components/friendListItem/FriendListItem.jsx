import css from './friendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css['is-Online'] : css['is-offline']}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
export default FriendListItem;
