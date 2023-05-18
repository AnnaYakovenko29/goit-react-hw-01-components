import data from '../../source/data.json';
import PropTypes from 'prop-types';
import style from './Statistics.css';

export const Statistics = () => {

  return (
    <div className='container'>
    <section className="statistics">
    <h2 className="title">Upload stats</h2>
  <div className='statCard'>
    <ul className="stat-list">
    {data.map(({id, label, percentage}) =>  
    <div className='itemCard'>   
      <li key={id}><p>{label}</p><p>{percentage}%</p></li>
      </div>
      )}
    </ul>
    </div>
  </section>
  </div>  
  )
}

// Statistics.propTypes = {
//   // title: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//     id: PropTypes.number.isRequired,
//   }),
// }