import css from 'components/statistics/statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.map(stat => (
        <li key={stat.id} className={css.item}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;
