import React from 'react';

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

const ImageGalleryItem = ({ el }) => {
  return (
    <Li className="list-group-item">
      <Link href={el.largeImageURL}>
        <div>
          <GalleryImg src={el.webformatURL} alt={el.tags} loading="lazy" />
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
        </div>
      </Link>
    </Li>
  );
};

export default ImageGalleryItem;
