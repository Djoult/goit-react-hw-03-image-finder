import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures }) => {
  return (
    <ul className="gallery">
      {pictures.map(el => (
        <ImageGalleryItem el={el} key={el.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
