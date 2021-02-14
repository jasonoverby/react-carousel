import React from 'react';
import PropTypes from 'prop-types';

import { imageLocations } from '../lib/image-locations';
import { updateImage } from '../lib/update-image';

export const Dots = ({ imageIndex, setImageIndex, setImageLoaded }) => {
  const dots = imageLocations.map((_, i) => (
    <Dot
      imageIndex={imageIndex}
      index={i}
      key={`dot-${i}`}
      setImageIndex={setImageIndex}
      setImageLoaded={setImageLoaded}
    />
  ));

  return <div className="dots">{dots}</div>;
};

export const Dot = ({ imageIndex, index, setImageIndex, setImageLoaded }) => {
  return (
    <button
      className={index === imageIndex ? 'active' : ''}
      // image number in label should not be zero-indexed as that might be confusing
      aria-label={`show image ${index + 1}`}
      onClick={async () => {
        await updateImage({
          updatedImageIndex: index,
          setImageIndex,
          setImageLoaded,
        });
      }}
      type="button"
    >
      <span>•</span>
    </button>
  );
};

Dots.propTypes = {
  setImageIndex: PropTypes.func.isRequired,
  setImageLoaded: PropTypes.func.isRequired,
};
Dot.propTypes = {
  ...Dots.propTypes,
  index: PropTypes.number.isRequired,
};
