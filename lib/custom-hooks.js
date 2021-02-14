import { useEffect } from 'react';

import { getNewImageIndex, updateImage } from './update-image';

export const useImageCycling = ({
  carouselPaused,
  imageIndex,
  setImageIndex,
  setImageLoaded,
}) => {
  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!carouselPaused) {
        const updatedImageIndex = getNewImageIndex(imageIndex, 'increment');
        await updateImage({
          setImageIndex,
          setImageLoaded,
          updatedImageIndex,
        });
      }
    }, 10000);
    return () => clearInterval(intervalId);
  });
};
