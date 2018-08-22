import React, { Component } from 'react';
import '../Styles/App.css';

import Nav from './Nav'



class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="app-header">
          <Nav
             goToDetails = {this.props.goToDetails}
             goToRegistry ={this.props.goToRegistry}
             goToRSVP = {this.props.goToRSVP}
          />
          <h1 className="header-title">Eric & Makayla</h1>
          <span className="date">Are Getting Married</span>
        </header>
      </div>
    );
  }
}

export default Header;
