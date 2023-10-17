import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, onClick }) => (
  <ul className="gallery">
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
    ))}
  </ul>
);

export default ImageGallery;