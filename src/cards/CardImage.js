import React from 'react';
import c from 'classnames';

export default function CardImage({ children }) {
  return (
    <div className={c('card-img-top', 'position-relative')}>
      {children}
    </div>
  );
}