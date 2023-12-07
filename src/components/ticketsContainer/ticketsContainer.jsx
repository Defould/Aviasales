import Sort from '../sort/sort';
import TicketList from '../ticketList/ticketList';
import MoreBtn from '../moreBtn/moreBtn';

import styles from './ticketsContainer.module.scss';

const TicketsContainer = () => {
  return (
    <div className={styles.tickets_container}>
      <Sort />
      <TicketList />
      <MoreBtn />
    </div>
  );
};

export default TicketsContainer;
