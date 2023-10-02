import React, { Component } from 'react';

import css from './App.module.css';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { PostsApiService } from 'services/PostsApiService';
// import { Modal } from 'components/Modal/Modal';

export const apiService = new PostsApiService();

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  handleSearch = query => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    apiService.query = query;
    apiService.page = page;

    apiService
      .fetchPost()
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
          loading: false,
        }));
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    const { images, loading } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {images.length > 0 && (
          <Button onClick={this.fetchImages} disabled={loading} />
        )}
      </div>
    );
  }
}
