import React from 'react';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineCloudDownload,
  AiOutlineSearch,
} from 'react-icons/ai';

import {
  Li,
  GalleryImg,
  Info,
  InfoWrapper,
  Link,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  handleModalOpen = () => {
    this.setState({ isShowModal: true });
  };

  handleModalClose = () => {
    this.setState({ isShowModal: false });
  };
  render() {
    const el = this.props.el;

    return (
      <>
        <Li className="list-group-item">
          <Link>
            <GalleryImg
              src={el.webformatURL}
              alt={el.tags}
              loading="lazy"
              onClick={this.handleModalOpen}
            />
            <InfoWrapper className="info">
              <Info className="info-item">
                <AiOutlineLike />
                {el.likes}
              </Info>
              <Info className="info-item">
                <AiOutlineSearch />
                {el.views}
              </Info>
              <Info className="info-item">
                <AiOutlineComment />
                {el.comments}
              </Info>
              <Info className="info-item">
                <AiOutlineCloudDownload />
                {el.downloads}
              </Info>
            </InfoWrapper>
          </Link>
        </Li>
        {this.state.isShowModal && (
          <Modal
            largeImageURL={el.largeImageURL}
            tags={el.tags}
            onClose={this.handleModalClose}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
