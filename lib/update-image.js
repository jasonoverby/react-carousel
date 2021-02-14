import { imageLocations } from './image-locations';
import { wait } from './wait';

const NUM_IMAGES = imageLocations.length;

export const getNewImageIndex = (imageIndex, incrementOrDecrement) => {
  if (incrementOrDecrement === 'increment') {
    return imageIndex === NUM_IMAGES - 1 ? 0 : imageIndex + 1;
  }
  if (incrementOrDecrement === 'decrement') {
    return imageIndex === 0 ? NUM_IMAGES - 1 : imageIndex - 1;
  }

  return imageIndex;
};

export const updateImage = async ({
  updatedImageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => {
  // hide current image
  setImageLoaded(false);
  setActiveDotIndex(updatedImageIndex);
  // ensure previous image opacity has time to ease to 0
  // when arrow or dot is clicked
  await wait(200);
  setImageIndex(updatedImageIndex);
  // ensure previous image opacity has time to ease to 0
  // when cycling to next image automatically
  await wait(200);
  // show updated image
  setImageLoaded(true);
};
