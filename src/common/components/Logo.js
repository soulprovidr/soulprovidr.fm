import React from 'react';

import LogoImage from '@/static/images/logo.svg';

export default function Logo({ className, size }) {
  const pxSize = `${size}px`;
  return (
    <img
      className={`rounded-circle ${className}`}
      src={LogoImage}
      style={{ width: pxSize, height: pxSize }}
    />
  );
}