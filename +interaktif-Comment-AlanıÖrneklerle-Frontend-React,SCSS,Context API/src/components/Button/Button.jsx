import React from 'react';
import {clsx} from 'clsx';

import styles from './styles.module.scss';

export const Button = ({variant = 'ghost', children, className, ...props}) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
