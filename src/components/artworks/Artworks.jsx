import React from 'react';
import artworks from '../../images/hl_artworks';
import Gallery from './Masonry';

const Artworks = () => {
  return <Gallery elements={artworks} />;
};

export default Artworks;
