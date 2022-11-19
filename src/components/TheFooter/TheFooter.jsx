import classNames from 'classnames';
import { Button, Container, Logo, SocialNav } from '../common';
import { TheFooterNav } from './components/TheFooterNav';
import styles from './TheFooter.module.scss';

export const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Logo className={styles.logo} />
        <div className={styles.wrapper}>
          <TheFooterNav />
          <div className={styles.contacts}>
            <div className={styles.contacts__wrapper}>
              <span className={classNames(styles.contacts__info, styles.title)}>Contacts</span>
              <span className={classNames(styles.contacts__info, styles.street)}>964 Worthington Drive Dubai, UAE</span>
              <span className={classNames(styles.contacts__info, styles.email)}>dubairealty@mail.com</span>
            </div>
            <Button type='button' className={styles.contacts__btn}>
              Book a consultation
            </Button>
          </div>
        </div>
      </Container>
      <Container className={styles.containerBottom}>
        <SocialNav className={styles.socialNav} />
        <span className={styles.copy}>Copyright © 2022 Dubai Realty</span>
      </Container>
    </footer>
  );
};
