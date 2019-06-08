import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
  opacity: 1;
  transition: transform 150ms ease;

  &:hover {
    transform: scale(1.1);
  }

  &--disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export default function Icon({
  className,
  disabled,
  onClick,
  src
}) {
  return (
    <>
      <StyledIcon
        className={`
          ${disabled ? className + '--disabled' : ''}
        `}
        src={src}
        onClick={onClick}
        src={src}
      />
    </>
  );
}