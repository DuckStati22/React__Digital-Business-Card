import React from 'react';
import photo from './img/hero-photo.png';

function Photo() {
  return (
    <div className="container">
      <img className="photo__image" src={photo} alt="hero" />
    </div>
  )
}

export default Photo