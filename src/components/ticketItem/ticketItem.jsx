import { format, add } from 'date-fns';

import styles from './ticketItem.module.scss';

const TicketItem = ({ price, carrier, segments }) => {
  const [depart, back] = segments;
  const formatPrice = (p) => {
    const newPrice = p.toString().split('');
    newPrice.splice(newPrice.length - 3, 0, ' ');
    newPrice.push(' Р');
    return newPrice.join('');
  };

  const formatStops = (stops) => {
    if (stops === 0) return 'без пересадок';
    if (stops === 1) return '1 пересадка';
    if (stops > 1) return `${stops} пересадки`;
    return null;
  };

  const formatDuration = (min) => {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  };

  const formatStartEndTime = (startTime, duration) => {
    const parseStartTime = new Date(startTime).getTime();
    const formatStartTime = format(parseStartTime, 'HH:mm');
    const parseEndTime = add(parseStartTime, { minutes: duration });
    const formatEndTime = format(parseEndTime, 'HH:mm');
    return `${formatStartTime} – ${formatEndTime}`;
  };

  return (
    <div className={styles.ticket_card}>
      <div className={styles.card_header}>
        <div className={styles.card_header__price}>{formatPrice(price)} </div>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="company_logo"></img>
      </div>
      <div className={styles.card_body}>
        <div className={`${styles.card_row} ${styles.card_row__1}`}>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>
              {depart.origin} – {depart.destination}
            </div>
            <div className={styles.card_block__info}>{formatStartEndTime(depart.date, depart.duration)}</div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>В пути</div>
            <div className={styles.card_block__info}>{formatDuration(depart.duration)}</div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>{formatStops(depart.stops.length)}</div>
            <div className={styles.card_block__info}>{depart.stops.join(', ')}</div>
          </div>
        </div>

        <div className={styles.card_row}>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>{formatStartEndTime(back.date, back.duration)}</div>
            <div className={styles.card_block__info}>
              {back.origin} – {back.destination}
            </div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>В пути</div>
            <div className={styles.card_block__info}>{formatDuration(back.duration)}</div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>{formatStops(back.stops.length)}</div>
            <div className={styles.card_block__info}>{back.stops.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
