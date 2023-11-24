import Transfers from '../transfers/transfers';
import Filters from '../filters/filters';

import styles from './container.module.scss';

const Container = () => {
  return (
    <div className={styles.container}>
      <Transfers />
      <Filters />
    </div>
  );
};

export default Container;
