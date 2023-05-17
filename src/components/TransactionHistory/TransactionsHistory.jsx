import items from '../../source/transactions.json';
import PropTypes from 'prop-types';
import style from './TransactionsHistory.css';

export const TransactionsHistory = () => {
  return (
    <div className='container'>
      <table className="transaction-history">
  <thead className='thead'>
    <tr className='trList'>
      <th className='th'>Type</th>
      <th className='th'>Amount</th>
      <th className='th'>Currency</th>
    </tr>
  </thead>
  <tbody className='tbody'>
  {items.map(({id, type, amount, currency}) => 
    <tr className='trItem' key={id}>
    <td className='td'>{type}</td>
    <td className='td'>{amount}</td>
    <td className='td'>{currency}</td>
    </tr>
)}
  </tbody>
</table>
    </div>
  )
}

// TransactionsHistory.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
// }