import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  getProgress: PropTypes.func,
};

const defaultProps = {
  getProgress: () => 0
};

const ProgressBar = ({ getProgress }) => (
  <div className="progress position-fixed">
    <div
      style={{
        background: 'pink',
        width: `${getProgress()}%`
      }}
    />
  </div>
);

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;