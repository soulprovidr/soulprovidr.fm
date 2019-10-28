import React from 'react';

export default function CardBadge({ category }) {  
  return (
    <div
      className={`
        card-badge
        ${category ? `card-badge--${category.key}` : ''}
      `}
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