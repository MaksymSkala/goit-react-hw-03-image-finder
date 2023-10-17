import React from 'react';

const Button = ({ onClick }) => (
  <button type="button" onClick={onClick} className="button-load">
    Load more
  </button>
);

export default Button;