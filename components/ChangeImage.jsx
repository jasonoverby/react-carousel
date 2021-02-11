import React from 'react';

import { updateImage, getNewImageIndex } from '/lib/utils';

export const DecrementImage = ({
  imageIndex,
  setImageIndex,
  setImageLoaded,
}) => (
  <button
    onClick={async () => {
      const updatedImageIndex = getNewImageIndex(imageIndex, 'decrement');
      await updateImage({
        updatedImageIndex,
        setImageIndex,
        setImageLoaded,
      });
    }}
  >
    ◀
  </button>
);

export const IncrementImage = ({
  imageIndex,
  setImageIndex,
  setImageLoaded,
}) => (
  <button
    onClick={async () => {
      const updatedImageIndex = getNewImageIndex(imageIndex, 'increment');
      await updateImage({
        updatedImageIndex,
        setImageIndex,
        setImageLoaded,
      });
    }}
  >
    ▶
  </button>
);
