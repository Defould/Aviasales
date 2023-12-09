import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import { getSearchId, getTickets } from '../../actions/actionCreators';
import Sort from '../sort/sort';
import TicketList from '../ticketList/ticketList';
import MoreBtn from '../moreBtn/moreBtn';

import styles from './ticketsContainer.module.scss';

const TicketsContainer = () => {
  const dispatch = useDispatch();

  const { searchId, tickets, stopFetching } = useSelector((state) => state.fetchData);
  const stopsFilter = useSelector((state) => state.stops);
  const sort = useSelector((state) => state.sort);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    if (!searchId) {
      dispatch(getSearchId());
    }
    if (searchId && !stopFetching) {
      dispatch(getTickets(searchId));
    }
  }, [searchId, tickets, stopFetching, dispatch]);

  useEffect(() => {
    setLimit(5);
  }, [stopsFilter, sort]);

  const filterAndSortTickets = (ticketsList) => {
    const filteredTickets = ticketsList.reduce((acc, ticket) => {
      if (stopsFilter.all) {
        acc.push(ticket);
      } else if (stopsFilter[0] && ticket.segments[0].stops.length === 0) {
        acc.push(ticket);
      } else if (stopsFilter[1] && ticket.segments[0].stops.length === 1) {
        acc.push(ticket);
      } else if (stopsFilter[2] && ticket.segments[0].stops.length === 2) {
        acc.push(ticket);
      } else if (stopsFilter[3] && ticket.segments[0].stops.length === 3) {
        acc.push(ticket);
      }
      return acc;
    }, []);

    if (sort === 'cheapest') {
      return [...filteredTickets].sort((a, b) => a.price - b.price);
    }
    if (sort === 'fastest') {
      return [...filteredTickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    }

    return filteredTickets;
  };

  const ticketsData = filterAndSortTickets(tickets).slice(0, limit);

  if (!ticketsData.length && !stopFetching) {
    return <Spin size="large" className={styles.loader} />;
  }

  if (!ticketsData.length) {
    return (
      <div className={styles.info}>
        <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
      </div>
    );
  }

  return (
    <div className={styles.tickets_container}>
      <Sort />
      <TicketList ticketsData={ticketsData} />
      <MoreBtn showMoreTickets={() => setLimit((lim) => lim + 5)} />
    </div>
  );
};

export default TicketsContainer;
