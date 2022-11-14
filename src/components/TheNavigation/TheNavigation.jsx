import { useState } from 'react';
import { Button, Container, Icon, Logo } from '../common';
import { Menu } from './components/Menu';
import styles from './TheNavigation.module.scss';
import classNames from 'classnames';

export const TheNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showNav = () => {
    setShowMenu(!showMenu);
  };
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
          <Icon
            name='burger'
            className={classNames(styles.header__nav_burger, showMenu && styles.active)}
            onClick={showNav}
          />
        </nav>
      </Container>
    </header>
  );
};
