import React, { Component } from "react";
import Loader from "react-loader-spinner";

import s from "./Spinner.module.css";

class Spinner extends Component {
  render() {
    return (
      <div className={s.Spinner}>
        <Loader type="Puff" color="#00BFFF" height={50} width={50} />
      </div>
    );
  }
}

export default Spinner;