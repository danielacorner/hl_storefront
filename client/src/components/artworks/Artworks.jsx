import React from 'react';
import artworks from '../../images/hl_artworks';
import Gallery from './Masonry';

const Artworks = () => {
  const { allArt } = this.props;
  // return <Gallery elements={artworks} />;
  return <Gallery elements={allArt} />;
};

export default Artworks;
