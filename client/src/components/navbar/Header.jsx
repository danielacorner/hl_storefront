import React, { Component } from 'react';
// import backgroundImage from '../../images/artworks/art-1.jpg';
import header from '../../images/artworks/background.jpg';
import * as M from 'materialize-css';

export default class Header extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  }
  render() {
    return (
      <header className="App-header parallax-container">
        <div className="App-header-background parallax">
          <img alt="background" src={header} />
        </div>
        <div className="App-title">
          <h1>Hyeran Lee</h1>
        </div>
      </header>
    );
  }
}
