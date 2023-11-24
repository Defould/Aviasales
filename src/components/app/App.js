import Logo from '../logo/logo';
import Container from '../container/container';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <Container />
    </div>
  );
}

export default App;
