import { useDispatch, useSelector } from 'react-redux';

import { updateStopsFilter } from '../../actions/actionCreators';

import styles from './stopsFilter.module.scss';

const StopsFilter = () => {
  const dispatch = useDispatch((state) => state.filters);
  const stopsData = useSelector((state) => state.stops);

  const stopsLabels = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  const handleChange = (key) => {
    dispatch(updateStopsFilter(key));
  };

  const stops = stopsLabels.map((label, index) => {
    const transferKey = index === 0 ? 'all' : `${index - 1}`;

    return (
      <label key={label} className={styles.label}>
        <input
          className={styles.input_check}
          type="checkbox"
          checked={stopsData[transferKey] || (index === 0 && stopsData['all'])}
          onChange={() => handleChange(transferKey)}
        />
        <span className={styles.custom_check}></span>
        <span className={styles.label_text}>{label}</span>
      </label>
    );
  });

  return (
    <div className={styles.transfers_container}>
      <div className={styles.transfers_title}>Количество пересадок</div>
      <div className={styles.transfers_list}>{stops}</div>
    </div>
  );
};

export default StopsFilter;
