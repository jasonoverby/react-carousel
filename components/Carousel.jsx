import React, { useEffect, useState } from 'react';

import { ImageContainer } from './ImageContainer';
import { Dots } from './Dots';
import { DecrementImage, IncrementImage } from './ChangeImage';
import { getNewImageIndex, updateImage } from '/lib/utils';

export const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!carouselPaused) {
        const updatedImageIndex = getNewImageIndex(imageIndex, 'increment');
        await updateImage({
          updatedImageIndex,
          setImageIndex,
          setImageLoaded,
        });
      }
    }, 10000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="container">
      <DecrementImage
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        setImageLoaded={setImageLoaded}
      />
      <ImageContainer
        imageIndex={imageIndex}
        imageLoaded={imageLoaded}
        setCarouselPaused={setCarouselPaused}
      />
      <IncrementImage
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        setImageLoaded={setImageLoaded}
      />
      <Dots setImageIndex={setImageIndex} setImageLoaded={setImageLoaded} />
    </div>
  );
};
