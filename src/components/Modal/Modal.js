import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import img from '../../img/404_error.jpg';

export default class Modal extends Component {
  static defaultProps = {
    src: img,
  };

  static propTypes = {
    src: PropTypes.string,
  };

  state = {
    modal: false,
  };

  componentDidMount() {
    if (this.props.src !== '') {
      this.setState({ modal: true });
    }
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({ modal: false });
      }
    });
    window.addEventListener('click', e => {
      if (e.target.alt !== 'img') {
        this.setState({ modal: false });
      }
      if (e.target.alt === 'img') {
        this.setState({ modal: true });
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    window.removeEventListener('keydown', e => {
      if (e.target.alt !== 'img') {
        this.setState({ modal: false });
      }
      if (e.target.alt === 'img') {
        this.setState({ modal: true });
      }
    });
  }

  render() {
    return (
      this.state.modal && (
        <div className={s.Overlay}>
          <div className={s.Modal}>
            <img src={this.props.src} alt="img" />
          </div>
        </div>
      )
    );
  }
}
