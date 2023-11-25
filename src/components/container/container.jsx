import Transfers from '../transfers/transfers';
import TicketsContainer from '../ticketsContainer/ticketsContainer';

import styles from './container.module.scss';

const Container = () => {
  return (
    <div className={styles.container}>
      <Transfers />
      <TicketsContainer />
    </div>
  );
};

export default Container;
