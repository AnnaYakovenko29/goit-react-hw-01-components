import friends from '../../source/friends.json';
import PropTypes from 'prop-types';
import style from './FriendList.css';

export const FriendList = () => {
  return (
    <div className='container'>
    {friends.map(({avatar, name, isOnline, id}) =>
<li key={id}>
  <div style={{width:'15px', height:'15px', borderRadius:'100%', backgroundColor: isOnline === true ? 'green' : 'red'}}></div>
  <img src={avatar} alt="" />
  <p>{name}</p>
  </li>
  )}
  </div>
  )
}

// FriendList.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired,
// }