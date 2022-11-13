import classNames from 'classnames';
import styles from './Container.module.scss';

export const Container = ({ children, className }) => {
  return <div className={classNames(styles.container, className)}>{children}</div>;
};
