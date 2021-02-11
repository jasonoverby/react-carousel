import { imageLocations } from '/lib/image-locations';

const NUM_IMAGES = imageLocations.length;

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNewImageIndex = (imageIndex, incrementOrDecrement) => {
  if (incrementOrDecrement === 'increment') {
    return imageIndex === NUM_IMAGES - 1 ? 0 : imageIndex + 1;
  } else if (incrementOrDecrement === 'decrement') {
    return imageIndex === 0 ? NUM_IMAGES - 1 : imageIndex - 1;
  }
};

export const updateImage = async ({
  updatedImageIndex,
  setImageIndex,
  setImageLoaded,
}) => {
  setImageLoaded(false);
  await wait(500);
  setImageIndex(updatedImageIndex);
  await wait(200);
  setImageLoaded(true);
};
