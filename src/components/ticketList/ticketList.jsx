import Loader from '../loader/loader';
import TicketItem from '../ticketItem/ticketItem';

import styles from './ticketList.module.scss';

const TicketList = () => {
  return (
    <ul className={styles.ticket_list}>
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <Loader />
    </ul>
  );
};

export default TicketList;
