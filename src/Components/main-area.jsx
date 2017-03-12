import React, { Component } from 'react';
import Temporary from './temporary.jsx';

class MainArea extends Component {
  render() {
    return(
      <div className="main-content">
        <div className="container-fluid">

          <Temporary/>

        </div>
      </div>
    );
  }
}

export default MainArea;
