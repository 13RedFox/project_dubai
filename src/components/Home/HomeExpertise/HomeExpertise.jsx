import styles from './HomeExpertise.module.scss';
import { Container } from '../../common';

export const HomeExpertise = () => {
  return (
    <section className={styles.expertise}>
      <Container className={styles.container}>
        <div className={styles.expertise__wrapper}>
          <p className={styles.expertise__wrapper_subtitle}>Our expertise</p>
          <h2 className={styles.expertise__wrapper_title}>"The best apartment in Dubai" we will find your dream</h2>
          <p className={styles.expertise__wrapper_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut libero id,
            blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec
            viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel
            sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam
            auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex.
            Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor
            dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
      </Container>
    </section>
  );
};
