import React, { useState, useEffect } from 'react';

import { imageLocations } from '/lib/image-locations';

export const ImageLink = ({ imageIndex, imageLoaded, setCarouselPaused }) => {
  return (
    <a
      aria-label={`Visit
        ${imageLocations[imageIndex].href} (opens in a new tab)`}
      href={imageLocations[imageIndex].href}
      onMouseOver={() => setCarouselPaused(true)}
      onMouseOut={() => setCarouselPaused(false)}
      target="_blank"
    >
      <img
        aria-label="This image will change every ten seconds unless the cursor is hovering over it"
        src={imageLocations[imageIndex].src}
        className={imageLoaded ? 'imageLoaded' : ''}
      />
    </a>
  );
};

export const ImageContainer = ({
  imageIndex,
  imageLoaded,
  setCarouselPaused,
}) => (
  <div className="imgContainer">
    <ImageLink
      imageIndex={imageIndex}
      imageLoaded={imageLoaded}
      setCarouselPaused={setCarouselPaused}
    />
  </div>
);
