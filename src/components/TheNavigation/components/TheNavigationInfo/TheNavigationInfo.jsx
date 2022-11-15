import classNames from 'classnames';
import { Button } from '../../../common';
import styles from './TheNavigationInfo.module.scss';

export const TheNavigationInfo = ({ className }) => {
  return (
    <div className={classNames(styles.info, className)}>
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
      <Button type='button' className={styles.info__btn}>
        Book a consultation
      </Button>
      <a href='tel:+72126742510' className={styles.info__phone}>
        +7 (212) 674-25-10
      </a>
      <div className={styles.wrapperLang}>
        <button className={styles.wrapperLang__lang}>eu</button>
        <button className={styles.wrapperLang__lang}>ru</button>
      </div>
    </div>
  );
};
