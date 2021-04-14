import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    onFetch: PropTypes.string,
    src: PropTypes.func,
  };

  state = {
    visible: false,
    page: 1,
  };

  largeImageURL = e => {
    this.props.src(e);
  };

  visible = length => {
    if (length) {
      if (this.state.visible) {
        this.setState({ visible: false });
      }
    }
    if (!length) {
      this.setState({ visible: true });
    }
  };

  pageNumber = e => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  resPage = e => {
    if (e) {
      this.setState({ page: 1 });
    }
  };

  render() {
    return (
      <div>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem
            onFetch={this.props.onFetch}
            largeImageURL={this.largeImageURL}
            visible={this.visible}
            numberPage={this.state.page}
            resPage={this.resPage}
          />
        </ul>
        {this.state.visible && <Button pageNumber={this.pageNumber} />}
      </div>
    );
  }
}
export default ImageGallery;
