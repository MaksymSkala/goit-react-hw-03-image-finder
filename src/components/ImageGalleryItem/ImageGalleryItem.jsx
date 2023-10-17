import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="gallery-item">
    <img
      src={image.webformatURL}
      alt={image.tags}
      className="gallery-image"
      onClick={() => onClick(image.largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;