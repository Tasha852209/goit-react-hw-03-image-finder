import React from 'react';
import css from './Button.module.css';

export const Button = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={css.button}
    >
      Load more
    </button>
  );
};
