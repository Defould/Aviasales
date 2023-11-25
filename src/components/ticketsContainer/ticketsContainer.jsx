import Filters from '../filters/filters';
import TicketList from '../ticketList/ticketList';
import MoreBtn from '../moreBtn/moreBtn';

import styles from './ticketsContainer.module.scss';

const TicketsContainer = () => {
  return (
    <div className={styles.tickets_container}>
      <Filters filter={'cheapest'} />
      <TicketList />
      <MoreBtn />
    </div>
  );
};

export default TicketsContainer;
