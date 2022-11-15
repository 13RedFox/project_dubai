import { TheNavigationInfo } from '../TheNavigationInfo';
import styles from './TheNavigationMenuMobile.module.scss';

export const TheNavigationMenuMobile = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.navMobile}>
        <li className={styles.navMobile__item}>
          <a href='#' className={styles.navMobile__link}>
            buy
          </a>
          <ul className={styles.navSubMenu}>
            <li className={styles.navSubMenu__item}>
              <a href='#' className={styles.navSubMenu__link}>
                Category number one
              </a>
            </li>
            <li className={styles.navSubMenu__item}>
              <a href='#' className={styles.navSubMenu__link}>
                Apartments in Dubai
              </a>
            </li>
            <li className={styles.navSubMenu__item}>
              <a href='#' className={styles.navSubMenu__link}>
                Category number twenty five
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.navMobile__item}>
          <a href='#' className={styles.navMobile__link}>
            blog
          </a>
        </li>
        <li className={styles.navMobile__item}>
          <a href='#' className={styles.navMobile__link}>
            about
          </a>
        </li>
        <li className={styles.navMobile__item}>
          <a href='#' className={styles.navMobile__link}>
            contact
          </a>
        </li>
      </ul>
      <div className={styles.line} />
      <TheNavigationInfo className={styles.info} />
    </div>
  );
};
