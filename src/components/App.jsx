import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import 'index.css';

import { fetchImages } from './Api/api'; // Файл для отримання даних з API

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    fetchImages(searchQuery, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { images, loading, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {loading && <Loader />}
        <ImageGallery images={images} onClick={this.handleImageClick} />
        {images.length > 0 && !loading && <Button onClick={this.fetchImages} />}
        {largeImageURL && (
          <Modal image={largeImageURL} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;