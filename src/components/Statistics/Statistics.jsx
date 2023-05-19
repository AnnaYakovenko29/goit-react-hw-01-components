import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className="container">
      <section className="statistics">
        <h2 className="title">{title}</h2>
        <div className="statCard">
          <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => (
              <div className="itemCard">
                <li key={id}>
                  <p>{label}</p>
                  <p>{percentage}%</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};