import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/phuong.css';
import './assets/css/main.css';
import './assets/css/bootstrap.css';
import './assets/css/vendor/icon-sets.css';
import './assets/css/demo.css';
// import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700';

import Sidebar from './Components/sidebar.jsx';
import Navbar from './Components/navbar.jsx';
import MainArea from './Components/main-area.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar/>
        <div className = "main">
          <Navbar/>
          <MainArea/>
        </div>
      </div>
    );
  }
}

export default App;
