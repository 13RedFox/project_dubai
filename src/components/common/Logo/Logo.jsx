import classNames from 'classnames';
import styles from './Logo.module.scss';

export const Logo = ({ className }) => {
  return (
    <a href='/' className={classNames(styles.logo, className)}>
      <span className={styles.logo__text}>DubaiRealty</span>
      <span className={styles.logo__subtext}>real estate</span>
    </a>
  );
};
