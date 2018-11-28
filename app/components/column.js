import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  columns: PropTypes.number
};

const defaultProps = {
  children: null,
  columns: 12
};

const Column = ({ children, columns }) => (
  <div className={`col-md-${columns}`}>
    {children}
  </div>
);

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;