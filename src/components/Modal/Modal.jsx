import React, { Component } from 'react';

import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClick();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  };
  render() {
    const { children, onClick } = this.props;

    return (
      <div className={css.overlay} onClick={onClick}>
        <div className={css.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
