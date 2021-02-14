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
  setImageIndex,
  setImageLoaded,
}) => {
  // hide current image
  setImageLoaded(false);
  // gives the old image time to ease out
  await wait(200);
  setImageIndex(updatedImageIndex);
  // gives the new image time to ease in
  await wait(500);
  // show updated image
  setImageLoaded(true);
};
