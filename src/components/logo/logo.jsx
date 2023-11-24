import logo from '../../shared/assets/img/Logo.png';

import styles from './styles.module.scss';

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="logo" />;
};

export default Logo;
