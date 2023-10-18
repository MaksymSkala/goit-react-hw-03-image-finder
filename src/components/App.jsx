import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { fetchImages } from '../Api/api';
import './App.css';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    largeImageURL: '',
    hasMoreImages: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page, hasMoreImages } = this.state;

    if (!hasMoreImages) {
      return;
    }

    this.setState({ loading: true });

    fetchImages(searchQuery, page)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
          hasMoreImages: data.hits.length > 0,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [], hasMoreImages: true });
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { images, loading, largeImageURL, hasMoreImages } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {loading && <Loader />}
        <ImageGallery images={images} onClick={this.handleImageClick} />
        {images.length > 0 && !loading && hasMoreImages && (
          <Button onClick={this.fetchImages} />
        )}
        {largeImageURL && (
          <Modal image={largeImageURL} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;