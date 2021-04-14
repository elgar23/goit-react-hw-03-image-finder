import { Component } from 'react';
import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from '../src/Components/Modal/Modal';

class App extends Component {
  state = {
    search: '',
    datasrc: '',
  };

  onSubmit = e => {
    return this.setState({ search: e });
  };

  largeImageURL = e => {
    this.setState({ datasrc: e });
  };

  render() {
    return (
      <div className={s.App}>
        <Modal src={this.state.datasrc} />
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery onFetch={this.state.search} src={this.largeImageURL} />
      </div>
    );
  }
}

export default App;
