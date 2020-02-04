import React from 'react';

function PauseIcon({ className, color, onClick, size }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      version="1.1"
      height={size}
      width={size}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 74.556 471.879 L 207.891 471.879 L 207.891 27.429 L 74.556 27.429 L 74.556 471.879 Z M 296.781 27.429 L 296.781 471.879 L 430.116 471.879 L 430.116 27.429 L 296.781 27.429 Z"
        fill={color}
        strokeWidth="20"
        strokeLinejoin="round"
        stroke={color}
      />
    </svg>
  );
}

PauseIcon.defaultProps = {
  className: '',
  color: '#000000',
  onClick: () => null,
  size: 50
};

export default PauseIcon;