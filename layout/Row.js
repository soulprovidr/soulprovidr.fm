import React from 'react';

const defaultProps = {
  className: '',
  children: null
};

function Row({ className, children }) {
  return (
    <div className={`row ${className}`}>
      {children}
    </div>
  );
}

Row.defaultProps = defaultProps;

export default Row;