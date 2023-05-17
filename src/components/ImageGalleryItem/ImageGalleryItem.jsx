import React from 'react';

import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineCloudDownload,
  AiOutlineSearch,
} from 'react-icons/ai';

const ImageGalleryItem = ({ el }) => {
  return (
    <li className="list-group-item">
      <a href={el.largeImageURL}>
        <div className="photo-card">
          <img src={el.webformatURL} alt={el.tags} loading="lazy" />
          <div className="info">
            <p className="info-item">
              <AiOutlineLike />
              {el.likes}
            </p>
            <p className="info-item">
              <AiOutlineSearch />
              {el.views}
            </p>
            <p className="info-item">
              <AiOutlineComment />
              {el.comments}
            </p>
            <p className="info-item">
              <AiOutlineCloudDownload />
              {el.downloads}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ImageGalleryItem;
