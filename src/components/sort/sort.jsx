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
      <li
        className={`${styles.filter_item} ${isFirst ? styles.first : ''} ${isLast ? styles.last : ''} ${clazz}`}
        onClick={() => sortHandler(name)}
        key={name}
      >
        {label}
      </li>
    );
  });

  return <ul className={styles.filters}>{sort}</ul>;
};

export default Sort;
