import { useState } from 'react';
import { Container, Logo } from '../common';
import { TheNavigationMenu } from './components/TheNavigationMenu';
import { TheNavigationMenuMobile } from './components/TheNavigationMenuMobile';
import styles from './TheNavigation.module.scss';

export const TheNavigation = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(!show);
  };
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <TheNavigationMenu show={show} showMenu={showMenu} />
        {show && <TheNavigationMenuMobile />}
      </Container>
    </header>
  );
};
