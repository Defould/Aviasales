import logo from '../../shared/assets/img/Logo.png';

import styles from './logo.module.scss';

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="logo" />;
};

export default Logo;
