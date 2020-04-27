import React from 'react';
import c from 'classnames';

import styles from './LiveIcon.module.css';

export default function LiveIcon({
  className = '',
  color = '#fff',
  size = 25,
}) {
  return (
    <svg className={c(styles.liveIcon, className)} width={size} height={size}>
      <circle
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
      />
    </svg>
  );
}
