import React from 'react';

import { imageLocations } from '/lib/image-locations';
import { updateImage } from '/lib/utils';

export const Dots = ({
  activeDotIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => {
  const dots = imageLocations.map((_, i) => (
    <Dot
      index={i}
      activeDotIndex={activeDotIndex}
      setActiveDotIndex={setActiveDotIndex}
      updatedImageIndex={i}
      setImageIndex={setImageIndex}
      setImageLoaded={setImageLoaded}
      key={`dot-${i}`}
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
  updatedImageIndex,
}) => {
  return (
    <button
      className={index === activeDotIndex ? 'active' : ''}
      // image number in label should not be zero-indexed as this could be confusing
      aria-label={`show image ${index + 1}`}
      onClick={async () => {
        await updateImage({
          setActiveDotIndex,
          setImageIndex,
          setImageLoaded,
          updatedImageIndex,
        });
      }}
    >
      <span>•</span>
    </button>
  );
};
