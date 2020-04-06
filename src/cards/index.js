import React from 'react';
import c from 'classnames';

import styles from './Card.module.css';

export { styles as cardStyles };

export function Card({ children, onClick, isActive, isPlayable }) {
  const className = c(
    styles.card,
    { [styles.playable]: isPlayable },
    { [styles.active]: isActive }
  );
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}

export function CardImage({ children }) {
  return (
    <div className={c('card-img-top', 'position-relative')}>{children}</div>
  );
}

export function CardBadge({ category }) {
  return (
    <div
      className={styles.badge}
      style={{
        background: category ? category.colour : 'transparent',
      }}
    >
      {category ? category.label : ''}
    </div>
  );
}

export function CardOverlay({ children, onClick }) {
  const className = c(
    styles.overlay,
    'position-absolute',
    'd-flex',
    'justify-content-center',
    'align-items-center'
  );
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
