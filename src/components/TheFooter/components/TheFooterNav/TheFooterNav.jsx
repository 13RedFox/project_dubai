import styles from './TheFooterNav.module.scss';

const nav = [
  {
    id: 0,
    title: 'Buy',
    subNav: [
      { id: 0, title: 'Apartment in Dubai' },
      { id: 1, title: 'House in Dubai' },
      { id: 2, title: 'Apartments in Dubai' },
      { id: 3, title: 'Loft in Dubai' },
      { id: 4, title: 'Penthouse in Dubai' },
      { id: 5, title: 'Villa in Dubai' },
    ],
  },
  {
    id: 1,
    title: 'Services',
    subNav: [
      { id: 0, title: 'Property management in Dubai, UAE' },
      { id: 1, title: 'Sell ​​property in Dubai, UAE' },
      { id: 2, title: 'Rent property in Dubai, UAE' },
      { id: 3, title: 'Investments in Dubai, UAE' },
      { id: 4, title: 'Real estate for cryptocurrency in Dubai' },
      { id: 5, title: 'Moving to Dubai, UAE' },
    ],
  },
  {
    id: 2,
    title: 'Information',
    subNav: [
      { id: 0, title: 'Video' },
      { id: 1, title: 'Podcasts' },
      { id: 2, title: 'Laws' },
      { id: 3, title: 'Questions and answers' },
      { id: 4, title: 'Books' },
      { id: 5, title: 'Articles' },
    ],
  },
  {
    id: 3,
    title: 'About company',
    subNav: [
      { id: 0, title: 'Jobs' },
      { id: 1, title: 'Story' },
      { id: 2, title: 'Licenses' },
      { id: 3, title: 'Why are we' },
      { id: 4, title: 'Real estate agency' },
    ],
  },
];

export const TheFooterNav = () => {
  return (
    <>
      {[] &&
        nav.map((nav) => (
          <ul className={styles.nav} key={nav.id}>
            <li className={styles.nav__item}>
              <a href='#' className={styles.nav__link}>
                {nav.title}
              </a>
              {[] &&
                nav.subNav.map((subNav) => (
                  <ul className={styles.subNav} key={subNav.id}>
                    <li className={styles.subNav__item}>
                      <a className={styles.subNav__link} href='#'>
                        {subNav.title}
                      </a>
                    </li>
                  </ul>
                ))}
            </li>
          </ul>
        ))}
    </>
  );
};
