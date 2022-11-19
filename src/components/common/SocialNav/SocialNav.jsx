import classNames from 'classnames';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './SocialNav.module.scss';

export const SocialNav = ({ className }) => {
  return (
    <ul className={classNames(styles.socialNav, className)}>
      <li className={styles.socialNav__item}>
        <a className={styles.socialNav__link} href='#'>
          <FaFacebookF className={styles.socialNav__icon} />
        </a>
      </li>
      <li className={styles.socialNav__item}>
        <a className={styles.socialNav__link} href='#'>
          <FaTwitter className={styles.socialNav__icon} />
        </a>
      </li>
      <li className={styles.socialNav__item}>
        <a className={styles.socialNav__link} href='#'>
          <FaYoutube className={styles.socialNav__icon} />
        </a>
      </li>
      <li className={styles.socialNav__item}>
        <a className={styles.socialNav__link} href='#'>
          <FaInstagram className={styles.socialNav__icon} />
        </a>
      </li>
      <li className={styles.socialNav__item}>
        <a className={styles.socialNav__link} href='#'>
          <FaLinkedin className={styles.socialNav__icon} />
        </a>
      </li>
    </ul>
  );
};
