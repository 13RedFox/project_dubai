import { useState } from 'react';
import { Button, Container, Logo } from '../common';
import { Menu } from './components/Menu';
import styles from './TheNavigation.module.scss';

export const TheNavigation = () => {
  const [] = useState(false);
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <nav className={styles.header__nav}>
          <Menu />
          <Button type='button' className={styles.header__nav_btn}>
            Book a consultation
          </Button>
          <div className={styles.header__nav_lang}>
            <span className={styles.text}>en</span>
            <span className={styles.text}>ru</span>
          </div>
          <a className={styles.header__nav_phone} href='tel:+72126742510'>
            +7 (212) 674-25-10
          </a>
        </nav>
      </Container>
    </header>
  );
};
