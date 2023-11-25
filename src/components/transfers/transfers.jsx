import styles from './transfers.module.scss';

const Transfers = () => {
  const transfersData = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  const transfers = transfersData.map((transfer) => {
    return (
      <li key={transfer} className={styles.transfers_item}>
        <label className={styles.label}>
          <input className={styles.input_check} type="checkbox" />
          <span className={styles.custom_check}></span>
          {transfer}
        </label>
      </li>
    );
  });

  return (
    <div className={styles.transfers_container}>
      <div className={styles.transfers_title}>Количество пересадок</div>
      <ul className={styles.transfers_list}>{transfers}</ul>
    </div>
  );
};

export default Transfers;
