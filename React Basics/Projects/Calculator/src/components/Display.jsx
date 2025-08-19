import React from 'react';
import displayStyles from './Display.module.css';

const Display = ({ displayValue }) => {
  return (
    <input
      className={displayStyles.display}
      type="text"
      value={displayValue}
      readOnly
      aria-label="Calculator display"
    />
  );
};

export default Display;
