import React from 'react';

function Spinner({ modifier, size }) {
  return (
    <div
      className={`spinner-border text-${modifier}`}
      role="status"
      style={{ width: size, height: size }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

Spinner.defaultProps = {
  modifier: 'secondary',
  size: 50
};

export default Spinner;