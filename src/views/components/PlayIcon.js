import React from 'react';

export function PlayIcon({ color, onClick, size, ...props }) {
  return (
    <svg
      onClick={onClick}
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 265 265"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 30.352 12.272 L 237.466 131.845 L 30.352 251.438 Z"
        fill={color}
        strokeWidth="20"
        strokeLinejoin="round"
        stroke={color}
      />
    </svg>
  );
}

PlayIcon.defaultProps = {
  color: '#000000',
  onClick: () => null,
  size: 50
};

export default PlayIcon;
