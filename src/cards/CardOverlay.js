import React from 'react';
import c from 'classnames';

import styles from './Card.module.css';

export default function CardOverlay({ children, onClick }) {
  const className = c(
    styles.overlay,
    'position-absolute',
    'd-flex',
    'justify-content-center',
    'align-items-center'
  );
  return (
    <div
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
}