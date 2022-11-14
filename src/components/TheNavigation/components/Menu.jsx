import styles from '../TheNavigation.module.scss';

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}>
        <a href='#' className={styles.menu__link}>
          buy
        </a>
        <ul className={styles.supmenu}>
          <li className={styles.supmenu__item}>
            <a href='#' className={styles.supmenu__link}>
              Category number one{' '}
            </a>
          </li>
          <li className={styles.supmenu__item}>
            <a href='#' className={styles.supmenu__link}>
              Apartments in Dubai{' '}
            </a>
          </li>
          <li className={styles.supmenu__item}>
            <a href='#' className={styles.supmenu__link}>
              Category number twenty five{' '}
            </a>
          </li>
        </ul>
      </li>
      <li className={styles.menu__item}>
        <a href='#' className={styles.menu__link}>
          blog
        </a>
      </li>
      <li className={styles.menu__item}>
        <a href='#' className={styles.menu__link}>
          about
        </a>
      </li>
      <li className={styles.menu__item}>
        <a href='#' className={styles.menu__link}>
          contact
        </a>
      </li>
    </ul>
  );
};
