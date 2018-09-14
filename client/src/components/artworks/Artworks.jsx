import React from 'react';
import artworks from '../../images/hl_artworks';
import MasonryGallery from './MasonryGallery';

const Artworks = props => {
  const { allArt } = props;
  console.log(allArt);
  // return <Gallery elements={artworks} />;
  return <MasonryGallery elements={allArt} />;
};

export default Artworks;
