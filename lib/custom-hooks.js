import { useEffect } from 'react';

import { getNewImageIndex, updateImage } from './utils';

export const useImageCycling = ({
  carouselPaused,
  imageIndex,
  setActiveDotIndex,
  setImageIndex,
  setImageLoaded,
}) => {
  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!carouselPaused) {
        const updatedImageIndex = getNewImageIndex(imageIndex, 'increment');
        await updateImage({
          setActiveDotIndex,
          setImageIndex,
          setImageLoaded,
          updatedImageIndex,
        });
      }
    }, 10000);
    return () => clearInterval(intervalId);
  });
};
