import styles from './filters.module.scss';

const Filters = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: 'cheapest', label: 'Самый дешевый' },
    { name: 'fastest', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ];
  console.log(filter);

  const btns = buttonsData.map(({ name, label }, index) => {
    const active = filter === name;
    const clazz = active ? styles.selected : '';
    const isFirst = index === 0;
    const isLast = index === buttonsData.length - 1;

    return (
      <li className={`${styles.filter_item} ${isFirst ? styles.first : ''} ${isLast ? styles.last : ''}`} key={name}>
        <button className={`${styles.filter_btn} ${clazz}`} onClick={() => onFilterSelect(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className={styles.filters}>{btns}</ul>;
};

export default Filters;
