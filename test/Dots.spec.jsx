import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import * as updateImage from '../lib/update-image';
import { Dots, Dot } from '../components/Dots';

jest.spyOn(updateImage, 'updateImage');

describe('Dots and Dot', () => {
  const activeDotIndex = 0;
  const setActiveDotIndex = jest.fn();
  const setImageIndex = jest.fn();
  const setImageLoaded = jest.fn();

  describe('Dots', () => {
    it('renders correctly', () => {
      const { asFragment } = render(
        <Dots
          activeDotIndex={activeDotIndex}
          setActiveDotIndex={setActiveDotIndex}
          setImageIndex={setImageIndex}
          setImageLoaded={setImageLoaded}
        />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Dot', () => {
    const index = 0;
    it('renders correctly', () => {
      const { asFragment } = render(
        <Dot
          activeDotIndex={activeDotIndex}
          index={index}
          setActiveDotIndex={setActiveDotIndex}
          setImageIndex={setImageIndex}
          setImageLoaded={setImageLoaded}
        />,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('calls updateImage on click', () => {
      const { container } = render(
        <Dot
          activeDotIndex={activeDotIndex}
          index={index}
          setActiveDotIndex={setActiveDotIndex}
          setImageIndex={setImageIndex}
          setImageLoaded={setImageLoaded}
        />,
      );

      const button = container.firstChild;
      fireEvent.click(button);
      expect(updateImage.updateImage).toHaveBeenCalledWith({
        updatedImageIndex: index,
        setActiveDotIndex,
        setImageIndex,
        setImageLoaded,
      });
    });
  });
});
