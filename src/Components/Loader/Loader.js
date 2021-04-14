import { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default class Loaders extends Component {
  //other logic
  render() {
    return (
      <Loader
        className={s.loader}
        type="Watch"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
    );
  }
}
