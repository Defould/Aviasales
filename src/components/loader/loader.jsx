import loader from '../../shared/assets/loader.gif';

import styles from './loader.module.scss';

const Loader = () => {
  return <img className={styles.loader} src={loader} alt="pre-loder" />;
};
export default Loader;
