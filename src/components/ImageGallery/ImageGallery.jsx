import React from 'react';
import css from './ImageGallery. module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryItems }) => {
  return (
    <ul className={css.imageGallery}>
      {galleryItems.map(galleryItem => (
        <ImageGalleryItem key={galleryItem.id} galleryItem={galleryItem} />
      ))}
    </ul>
  );
};
