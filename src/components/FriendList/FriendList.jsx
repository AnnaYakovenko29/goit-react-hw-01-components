import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

export const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <div className="friendList">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className="item" key={id}>
            <div
              className="isOnline"
              style={{ backgroundColor: isOnline === true ? 'green' : 'red' }}
            ></div>
            <img className="img" src={avatar} alt="" />
            <p className="title">{name}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.element.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
