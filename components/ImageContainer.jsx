import React from 'react';

import { imageLocations } from '/lib/image-locations';

export const ImageLink = ({ imageIndex, setCarouselPaused }) => (
  <a
    href={imageLocations[imageIndex].href}
    onMouseOver={() => setCarouselPaused(true)}
    onMouseOut={() => setCarouselPaused(false)}
    target="_blank"
  >
    <img src={imageLocations[imageIndex].src} />
  </a>
);

export const ImageContainer = ({ imageIndex, setCarouselPaused }) => (
  <div className="imgContainer">
    <ImageLink imageIndex={imageIndex} setCarouselPaused={setCarouselPaused} />
  </div>
);
