import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="container">
      <div className="profile">
        <div className="profileCard">
          <div className="description">
            <span className="circleImg">
              <img src={avatar} alt="User avatar" className="avatar" />
            </span>
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
          </div>
          <ul className="stats list">
            <li>
              <span className="label">Followers</span>
              <span className="quantity">{stats.followers}</span>
            </li>
            <li>
              <span className="label">Views</span>
              <span className="quantity">{stats.views}</span>
            </li>
            <li>
              <span className="label">Likes</span>
              <span className="quantity">{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
