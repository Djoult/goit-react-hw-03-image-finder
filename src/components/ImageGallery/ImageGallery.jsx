import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';

const ImageGallery = ({ pictures }) => {
  return (
    <Ul className="gallery">
      {pictures.map(el => (
        <ImageGalleryItem el={el} key={el.id} />
      ))}
    </Ul>
  );
};

export default ImageGallery;
