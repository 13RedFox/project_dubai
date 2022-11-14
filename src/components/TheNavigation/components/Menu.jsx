import styles from '../TheNavigation.module.scss';

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}>
        <a href='#' className={styles.menu__link}>
          buy
        </a>
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
