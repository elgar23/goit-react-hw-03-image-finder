import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  state = {
    value: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  inputValue = e => {
    return this.setState({ value: e.target.value });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputValue}
          />
        </form>
      </header>
    );
  }
}
