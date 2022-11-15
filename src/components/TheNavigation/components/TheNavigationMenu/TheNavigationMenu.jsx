import classNames from 'classnames';
import { Icon } from '../../../common';
import { TheNavigationInfo } from '../TheNavigationInfo';
import styles from './TheNavigationMenu.module.scss';

export const TheNavigationMenu = ({ show, showMenu }) => {
  return (
    <nav className={styles.nav}>
      <TheNavigationInfo className={styles.info} />
      <button className={styles.burger} onClick={showMenu}>
        <Icon name='burger' className={classNames(styles.burgerIcon, show && styles.show)} />
      </button>
    </nav>
  );
};
