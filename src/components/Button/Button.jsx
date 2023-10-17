import React from 'react';

const Button = ({ onClick }) => (
  <button type="button" className="searchform-button" onClick={onClick}>
    Load more
  </button>
);

export default Button;