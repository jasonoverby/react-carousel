import React from 'react';
import PropTypes from 'prop-types';

import { updateImage, getNewImageIndex } from '../lib/update-image';

export const UpdateImage = ({
  incrementOrDecrement,
  imageIndex,
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

export const DecrementImage = ({ imageIndex, setImageIndex, setImageLoaded }) =>
  UpdateImage({
    imageIndex,
    incrementOrDecrement: 'decrement',
    setImageIndex,
    setImageLoaded,
  });

export const IncrementImage = ({ imageIndex, setImageIndex, setImageLoaded }) =>
  UpdateImage({
    imageIndex,
    incrementOrDecrement: 'increment',
    setImageIndex,
    setImageLoaded,
  });

DecrementImage.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  setImageIndex: PropTypes.func.isRequired,
  setImageLoaded: PropTypes.func.isRequired,
};
IncrementImage.propTypes = DecrementImage.propTypes;
UpdateImage.propTypes = {
  ...DecrementImage.propTypes,
  incrementOrDecrement: PropTypes.string.isRequired,
};
