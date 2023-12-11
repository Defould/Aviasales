import TicketItem from '../ticketItem/ticketItem';

import styles from './ticketList.module.scss';

const TicketList = ({ ticketsData }) => {
  let id = 0;

  const tickets = ticketsData.map((props, i) => (
    <li key={id++} className={styles.ticket_list__item}>
      <TicketItem {...props} />
    </li>
  ));

  return <ul className={styles.ticket_list}>{tickets}</ul>;
};

export default TicketList;
