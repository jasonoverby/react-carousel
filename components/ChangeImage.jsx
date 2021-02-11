import React from 'react';

import { imageLocations } from '/lib/image-locations';

const NUM_IMAGES = imageLocations.length;
export const updateImage = (
  incrementOrDecrement,
  imageIndex,
  setImageIndex,
) => {
  let newImageIndex;
  if (incrementOrDecrement === 'increment') {
    newImageIndex = imageIndex === NUM_IMAGES - 1 ? 0 : imageIndex + 1;
  } else if (incrementOrDecrement === 'decrement') {
    newImageIndex = imageIndex === 0 ? NUM_IMAGES - 1 : imageIndex - 1;
  }
  setImageIndex(newImageIndex);
};

export const DecrementImage = ({ imageIndex, setImageIndex }) => (
  <button
    onClick={() => {
      updateImage('decrement', imageIndex, setImageIndex);
    }}
  >
    ◀
  </button>
);

export const IncrementImage = ({ imageIndex, setImageIndex }) => (
  <button
    onClick={() => {
      updateImage('increment', imageIndex, setImageIndex);
    }}
  >
    ▶
  </button>
);
