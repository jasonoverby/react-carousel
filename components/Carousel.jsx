import React, { useState } from 'react';

import { ImageContainer } from './ImageContainer';
import { Dots } from './Dots';
import { DecrementImage, IncrementImage } from './ChangeImage';
import { useImageCycling } from '../lib/custom-hooks';

export const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useImageCycling({
    carouselPaused,
    imageIndex,
    setActiveDotIndex,
    setImageIndex,
    setImageLoaded,
  });

  return (
    <div className="container">
      <DecrementImage
        imageIndex={imageIndex}
        setActiveDotIndex={setActiveDotIndex}
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
        setActiveDotIndex={setActiveDotIndex}
        setImageIndex={setImageIndex}
        setImageLoaded={setImageLoaded}
      />
      <Dots
        activeDotIndex={activeDotIndex}
        setActiveDotIndex={setActiveDotIndex}
        setImageIndex={setImageIndex}
        setImageLoaded={setImageLoaded}
      />
    </div>
  );
};
