import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/phuong.css';
import './assets/css/main.css';
import './assets/css/bootstrap.css';
import './assets/css/vendor/icon-sets.css';
import './assets/css/demo.css';
// import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700';


class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="sidebar">
          <div className="brand">
            <a href="index.html"><img src="./assets/img/logo.png" alt="Klorofil Logo" className="img-responsive logo"/></a>
          </div>
          <div className="sidebar-scroll">
            <nav>
              <ul className="nav">
                <li><a href="index.html" className="active"><i className="lnr lnr-home"></i> <span>Dashboard</span></a></li>
                <li><a href="elements.html" className=""><i className="lnr lnr-code"></i> <span>Elements</span></a></li>
                <li><a href="charts.html" className=""><i className="lnr lnr-chart-bars"></i> <span>Charts</span></a></li>
                <li><a href="panels.html" className=""><i className="lnr lnr-cog"></i> <span>Panels</span></a></li>
                <li><a href="notifications.html" className=""><i className="lnr lnr-alarm"></i> <span>Notifications</span></a></li>
                <li>
                  <a href="#subPages" data-toggle="collapse" className="collapsed"><i className="lnr lnr-file-empty"></i> <span>Pages</span> <i className="icon-submenu lnr lnr-chevron-left"></i></a>
                  <div id="subPages" className="collapse ">
                    <ul className="nav">
                      <li><a href="page-profile.html" className="">Profile</a></li>
                      <li><a href="page-login.html" className="">Login</a></li>
                      <li><a href="page-lockscreen.html" className="">Lockscreen</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="tables.html" className=""><i className="lnr lnr-dice"></i> <span>Tables</span></a></li>
                <li><a href="typography.html" className=""><i className="lnr lnr-text-format"></i> <span>Typography</span></a></li>
                <li><a href="icons.html" className=""><i className="lnr lnr-linearicons"></i> <span>Icons</span></a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className = "main">

          <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-btn">
            <button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
          </div>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu">
              <span className="sr-only">Toggle Navigation</span>
              <i className="fa fa-bars icon-nav"></i>
            </button>
          </div>
          <div id="navbar-menu" className="navbar-collapse collapse">
            <form className="navbar-form navbar-left hidden-xs">
              <div className="input-group">
                <input type="text" value="" className="form-control" placeholder="Search dashboard..."/>
                <span className="input-group-btn"><button type="button" className="btn btn-primary">Go</button></span>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                  <i className="lnr lnr-alarm"></i>
                  <span className="badge bg-danger">5</span>
                </a>
                <ul className="dropdown-menu notifications">
                  <li><a href="#" className="notification-item"><span className="dot bg-warning"></span>System space is almost full</a></li>
                  <li><a href="#" className="notification-item"><span className="dot bg-danger"></span>You have 9 unfinished tasks</a></li>
                  <li><a href="#" className="notification-item"><span className="dot bg-success"></span>Monthly report is available</a></li>
                  <li><a href="#" className="notification-item"><span className="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>
                  <li><a href="#" className="notification-item"><span className="dot bg-success"></span>Your request has been approved</a></li>
                  <li><a href="#" className="more">See all notifications</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="lnr lnr-question-circle"></i> <span>Help</span> <i className="icon-submenu lnr lnr-chevron-down"></i></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Basic Use</a></li>
                  <li><a href="#">Working With Data</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Troubleshooting</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="./assets/img/user.png" className="img-circle" alt="Avatar"/> <span>Samuel</span> <i className="icon-submenu lnr lnr-chevron-down"></i></a>
                <ul className="dropdown-menu">
                  <li><a href="#"><i className="lnr lnr-user"></i> <span>My Profile</span></a></li>
                  <li><a href="#"><i className="lnr lnr-envelope"></i> <span>Message</span></a></li>
                  <li><a href="#"><i className="lnr lnr-cog"></i> <span>Settings</span></a></li>
                  <li><a href="#"><i className="lnr lnr-exit"></i> <span>Logout</span></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="main">
        <nav class="navbar navbar-default">
          <div class="container-fluid">

          </div>
        </nav>
      </div>
      </div>
    </div>
    );
  }
}

export default App;
