import React from 'react';

import { updateImage, getNewImageIndex } from '/lib/utils';

export const DecrementImage = ({
  imageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => (
  <button
    onClick={async () => {
      const updatedImageIndex = getNewImageIndex(imageIndex, 'decrement');
      await updateImage({
        setActiveDotIndex,
        setImageIndex,
        setImageLoaded,
        updatedImageIndex,
      });
    }}
  >
    ◀
  </button>
);

export const IncrementImage = ({
  imageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => (
  <button
    onClick={async () => {
      const updatedImageIndex = getNewImageIndex(imageIndex, 'increment');
      await updateImage({
        setActiveDotIndex,
        setImageIndex,
        setImageLoaded,
        updatedImageIndex,
      });
    }}
  >
    ▶
  </button>
);
