import { useSelector, useDispatch } from 'react-redux';

import { updateSort } from '../../actions/actionCreators';

import styles from './sort.module.scss';

const Sort = () => {
  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.sort);

  const sortData = [
    { name: 'cheapest', label: 'Самый дешевый' },
    { name: 'fastest', label: 'Самый быстрый' },
  ];

  const sortHandler = (arg) => {
    dispatch(updateSort(arg));
  };

  const sort = sortData.map(({ name, label }, index) => {
    const active = activeSort === name;
    const clazz = active ? styles.selected : '';
    const isFirst = index === 0;
    const isLast = index === sortData.length - 1;

    return (
      <label
        className={`${styles.filter_item} ${isFirst ? styles.first : ''} ${isLast ? styles.last : ''} ${clazz}`}
        key={name}
      >
        <input
          className={styles.filter_item__input}
          type="radio"
          name="sortRadio" // Добавляем одинаковое имя для группы радиокнопок
          checked={activeSort === name}
          onChange={() => sortHandler(name)}
        />
        {label}
      </label>
    );
  });

  return <ul className={styles.filters}>{sort}</ul>;
};

export default Sort;

//`${styles.filter_item} ${isFirst ? styles.first : ''} ${isLast ? styles.last : ''} ${clazz}`
