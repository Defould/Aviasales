import styles from './filters.module.scss';

const Filters = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: 'cheapest', label: 'Самый дешевый' },
    { name: 'fastest', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ];

  const btns = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'selected' : '';

    return (
      <li key={name}>
        <button className={clazz} onClick={() => onFilterSelect(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <u className={styles.filters}>{btns}</u>;
};

export default Filters;
