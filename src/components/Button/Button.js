import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default class Button extends Component {
  static propTypes = {
    pageNumber: PropTypes.func.isRequired,
  };

  loadMore = () => {
    this.props.pageNumber();
  };

  render() {
    return (
      <div className={s.ButtonDiv}>
        <button className={s.Button} onClick={this.loadMore}>
          Load more
        </button>
      </div>
    );
  }
}
