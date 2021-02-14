import React from 'react';
import PropTypes from 'prop-types';

import { imageLocations } from '../lib/image-locations';
import { updateImage } from '../lib/update-image';

export const Dots = ({
  activeDotIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => {
  const dots = imageLocations.map((_, i) => (
    <Dot
      activeDotIndex={activeDotIndex}
      index={i}
      key={`dot-${i}`}
      setActiveDotIndex={setActiveDotIndex}
      setImageIndex={setImageIndex}
      setImageLoaded={setImageLoaded}
    />
  ));

  return <div className="dots">{dots}</div>;
};

export const Dot = ({
  activeDotIndex,
  index,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => {
  return (
    <button
      className={index === activeDotIndex ? 'active' : ''}
      // image number in label should not be zero-indexed as that might be confusing
      aria-label={`show image ${index + 1}`}
      onClick={async () => {
        await updateImage({
          updatedImageIndex: index,
          setActiveDotIndex,
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
  activeDotIndex: PropTypes.number.isRequired,
  setActiveDotIndex: PropTypes.func.isRequired,
  setImageIndex: PropTypes.func.isRequired,
  setImageLoaded: PropTypes.func.isRequired,
};
Dot.propTypes = {
  ...Dots.propTypes,
  index: PropTypes.number.isRequired,
};
