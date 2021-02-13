import React from 'react';
import PropTypes from 'prop-types';

import { imageLocations } from '../lib/image-locations';

export const ImageLink = ({ imageIndex, imageLoaded, setCarouselPaused }) => {
  return (
    <a
      aria-label={`Visit
        ${imageLocations[imageIndex].href} (opens in a new tab)`}
      href={imageLocations[imageIndex].href}
      onMouseOver={() => setCarouselPaused(true)}
      // for keyboard navigation
      onFocus={() => setCarouselPaused(true)}
      onMouseOut={() => setCarouselPaused(false)}
      // for keyboard navigation
      onBlur={() => setCarouselPaused(false)}
      rel="noreferrer"
      target="_blank"
    >
      <img
        alt={imageLocations[imageIndex].alt}
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

ImageContainer.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  imageLoaded: PropTypes.bool.isRequired,
  setCarouselPaused: PropTypes.func.isRequired,
};
ImageLink.propTypes = ImageContainer.propTypes;
