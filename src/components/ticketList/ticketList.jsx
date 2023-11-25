import TicketItem from '../ticketItem/ticketItem';

import styles from './ticketList.module.scss';

const TicketList = () => {
  return (
    <ul className={styles.ticket_list}>
      <TicketItem />
      <TicketItem />
      <TicketItem />
    </ul>
  );
};

export default TicketList;
