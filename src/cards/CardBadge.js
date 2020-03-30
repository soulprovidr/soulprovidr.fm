import React from 'react';

import styles from './Card.module.css';

export default function CardBadge({ category }) {
  return (
    <div
      className={styles.badge}
      style={{
        background: category
          ? category.colour
          : 'transparent'
      }}
    >
      {category ? category.label : ''}
    </div>
  );
}