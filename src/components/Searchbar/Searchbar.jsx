import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchedValue: '',
  };
  handleChange = ({ target }) => {
    this.setState({
      searchedValue: target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormIcon}>&#128269;</span>
          </button>

          <input
            onChange={this.handleChange}
            className={css.searchFormInput}
            value={this.state.searchedValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
