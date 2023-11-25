import compLogo from '../../shared/assets/img/S7 Logo.png';

import styles from './ticketItem.module.scss';

const TicketItem = () => {
  return (
    <div className={styles.ticket_card}>
      <div className={styles.card_header}>
        <div className={styles.price}>13 400 Р </div>
        <img className={styles.company} src={compLogo}></img>
      </div>
      <div className={styles.card_body}>
        <div className={`${styles.card_row} ${styles.card_row__1}`}>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>MOW – HKT</div>
            <div className={styles.card_block__info}>10:45 – 08:00</div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>В пути</div>
            <div className={styles.card_block__info}>21ч 15м</div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>2 пересадки</div>
            <div className={styles.card_block__info}>HKG, JNB</div>
          </div>
        </div>

        <div className={styles.card_row}>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>MOW – HKT</div>
            <div className={styles.card_block__info}>11:20 – 00:50</div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>В пути</div>
            <div className={styles.card_block__info}>13ч 30м</div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_block__title}>1 пересадка</div>
            <div className={styles.card_block__info}>HKG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
