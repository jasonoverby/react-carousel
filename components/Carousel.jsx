import React, { useEffect, useState } from 'react';

import { ImageContainer } from './ImageContainer';
import { Dots } from './Dots';
import { updateImage, DecrementImage, IncrementImage } from './ChangeImage';

export const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!carouselPaused) {
        updateImage('increment', imageIndex, setImageIndex);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="container">
      <DecrementImage imageIndex={imageIndex} setImageIndex={setImageIndex} />
      <ImageContainer
        imageIndex={imageIndex}
        setCarouselPaused={setCarouselPaused}
      />
      <IncrementImage imageIndex={imageIndex} setImageIndex={setImageIndex} />
      <Dots setIndex={setImageIndex} />
    </div>
  );
};
