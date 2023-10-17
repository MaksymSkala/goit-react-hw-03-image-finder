import React from 'react';
import ImageGalleryItem from './ImageGallery';
import './ImageGallery.css';

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
    ))}
  </ul>
);

export default ImageGallery;
