import React from 'react';

import { imageLocations } from '/lib/image-locations';
import { updateImage } from '/lib/utils';

export const Dots = ({ setImageIndex, setImageLoaded }) => {
  const dots = imageLocations.map((_, i) => (
    <Dot
      updatedImageIndex={i}
      setImageIndex={setImageIndex}
      setImageLoaded={setImageLoaded}
      key={`dot-${i}`}
    />
  ));

  return <div className="dots">{dots}</div>;
};

export const Dot = ({ updatedImageIndex, setImageIndex, setImageLoaded }) => (
  <button
    onClick={async () => {
      await updateImage({
        updatedImageIndex,
        setImageIndex,
        setImageLoaded,
      });
    }}
  >
    <span>&#183;</span>
  </button>
);
