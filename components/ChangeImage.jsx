import React from 'react';
import PropTypes from 'prop-types';

import { updateImage, getNewImageIndex } from '/lib/utils';

export const DecrementImage = ({
  imageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => (
  <button
    aria-label="show previous image"
    className="changeImage"
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
    <span className="arrow">◀</span>
  </button>
);

export const IncrementImage = ({
  imageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => (
  <button
    aria-label="show previous image"
    className="changeImage"
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
    <span className="arrow">▶</span>
  </button>
);

DecrementImage.propTypes = {
  imageIndex: PropTypes.number,
  setActiveDotIndex: PropTypes.func,
  setImageIndex: PropTypes.func,
  setImageLoaded: PropTypes.func,
};
IncrementImage.propTypes = DecrementImage.propTypes;
