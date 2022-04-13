import { Link } from 'react-router-dom';
import ThemeSwitcher from '../Buttons/ThemeSwitcher';
import Container from './Container';
import styles from './Header.module.css';

/**
 * Page header in `Container`
 */

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_wraper}>
          <Link className={styles.title} to={'/'}>
            Where is the world?
          </Link>
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
}
