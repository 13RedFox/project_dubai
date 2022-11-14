import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ type, size = 'default', color, children, className, onClick }) => {
  return (
    <button
      type={type}
      size={size}
      className={classNames(styles.btn, styles[size], styles[color], className)}
      onClick={onClick}>
      {children}
    </button>
  );
};
