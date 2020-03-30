import React from 'react';
import c from 'classnames';

import styles from './Card.module.css';

export default function Card({ children, onClick, isPlayable }) {
  const className = c(styles.card, {[styles.cardPlayable]: isPlayable });
  return (
    <div
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  )
}