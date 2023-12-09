import styles from './moreBtn.module.scss';

const MoreBtn = ({ showMoreTickets }) => {
  return (
    <button className={styles.more_btn} onClick={() => showMoreTickets()}>
      Показать еще 5 билетов!
    </button>
  );
};

export default MoreBtn;
