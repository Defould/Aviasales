import { nanoid } from '@reduxjs/toolkit';

import TicketItem from '../ticketItem/ticketItem';

import styles from './ticketList.module.scss';

const TicketList = ({ ticketsData }) => {
  const tickets = ticketsData.map((props) => (
    <li key={nanoid()} className={styles.ticket_list__item}>
      <TicketItem {...props} />
    </li>
  ));

  return <ul className={styles.ticket_list}>{tickets}</ul>;
};

export default TicketList;
