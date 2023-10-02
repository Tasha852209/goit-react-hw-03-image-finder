import React, { Component } from 'react';

import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const {
      galleryItem: { webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <>
        <li className={css.imageGalleryItem} onClick={this.toggleModal}>
          <img
            className={css.imageGalleryItemImage}
            src={webformatURL}
            alt={tags}
          />
        </li>
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            onCloseModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}
