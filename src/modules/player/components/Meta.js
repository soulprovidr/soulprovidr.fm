import React from 'react';
import c from 'classnames';

import DefaultCover from '@/static/images/default.png';
import styles from './Player.module.css';

export default function Meta({ meta }) {
  const { artist, cover, title } = meta;
  return (
    <div className={c(styles.meta, 'd-flex')}>
      <img
        className={c(styles.metaCover, 'mr-2', 'mr-md-3')}
        src={cover || DefaultCover}
      />
      <div className="d-flex flex-column justify-content-center overflow-hidden">
        <p className={c(styles.metaTruncated, 'h6', 'font-weight-bold', 'm-0')}>
          {title}
        </p>
        <p className={c(styles.metaTruncated, 'h6', 'm-0', 'text-muted')}>
          {artist}
        </p>
      </div>
    </div>
  );
}
