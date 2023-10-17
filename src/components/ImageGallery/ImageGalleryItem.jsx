import React from 'react';
import './ImageGallery.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="gallery-item">
    <img className='gallery-image'
      src={image.webformatURL}
      alt={image.tags}
      onClick={() => onClick(image.largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;