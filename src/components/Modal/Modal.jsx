import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// Styled components
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKeydown);

    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKeydown);

    document.documentElement.style.overflow = 'unset';
  }

  handleEscKeydown = e => {
    const KEY_CODE = 'Escape';

    if (e.key === KEY_CODE) {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    const modalPortal = document.querySelector('#modal-root');

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalPortal
    );
  }
}
