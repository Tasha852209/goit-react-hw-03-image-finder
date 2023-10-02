import React from 'react';

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={image.src}
        alt={image.alt}
      />
    </li>
  );
};
