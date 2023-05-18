import friends from '../../source/friends.json';
import style from './FriendList.css';

export const FriendList = () => {
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
