import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <a href='/' className={styles.logo}>
      <span className={styles.logo__text}>DubaiRealty</span>
      <span className={styles.logo__subtext}>real estate</span>
    </a>
  );
};
