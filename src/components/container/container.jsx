import StopsFilter from '../stopsFilter/stopsFilter';
import TicketsContainer from '../ticketsContainer/ticketsContainer';

import styles from './container.module.scss';

const Container = () => {
  return (
    <div className={styles.container}>
      <StopsFilter />
      <TicketsContainer />
    </div>
  );
};

export default Container;
