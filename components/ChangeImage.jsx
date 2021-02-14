import React from 'react';
import PropTypes from 'prop-types';

import { updateImage, getNewImageIndex } from '../lib/update-image';

export const UpdateImage = ({
  incrementOrDecrement,
  imageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => (
  <button
    aria-label={`show ${
      incrementOrDecrement === 'decrement' ? 'previous' : 'next'
    } image`}
    className="changeImage"
    onClick={async () => {
      const updatedImageIndex = getNewImageIndex(
        imageIndex,
        incrementOrDecrement,
      );
      await updateImage({
        setActiveDotIndex,
        setImageIndex,
        setImageLoaded,
        updatedImageIndex,
      });
    }}
    type="button"
  >
    <span className="arrow">
      {incrementOrDecrement === 'decrement' ? '◀' : '▶'}
    </span>
  </button>
);

export const DecrementImage = ({
  imageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) =>
  UpdateImage({
    imageIndex,
    incrementOrDecrement: 'decrement',
    setActiveDotIndex,
    setImageIndex,
    setImageLoaded,
  });

export const IncrementImage = ({
  imageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) =>
  UpdateImage({
    imageIndex,
    incrementOrDecrement: 'increment',
    setActiveDotIndex,
    setImageIndex,
    setImageLoaded,
  });

DecrementImage.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  setActiveDotIndex: PropTypes.func.isRequired,
  setImageIndex: PropTypes.func.isRequired,
  setImageLoaded: PropTypes.func.isRequired,
};
IncrementImage.propTypes = DecrementImage.propTypes;
UpdateImage.propTypes = {
  ...DecrementImage.propTypes,
  incrementOrDecrement: PropTypes.string.isRequired,
};
