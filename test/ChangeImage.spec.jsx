import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import * as updateImage from '../lib/update-image';
import {
  DecrementImage,
  IncrementImage,
  UpdateImage,
} from '../components/ChangeImage';

jest.spyOn(updateImage, 'updateImage');
jest.spyOn(updateImage, 'getNewImageIndex');

describe('ChangeImage', () => {
  const setImageIndex = jest
    .fn()
    .mockImplementation((imageIndex, incrementOrDecrement) =>
      incrementOrDecrement === 'increment' ? imageIndex + 1 : imageIndex - 1,
    );
  const setImageLoaded = jest.fn();

  describe('UpdateImage', () => {
    const getContainer = (incrementOrDecrement, imageIndex) => {
      const { container } = render(
        <UpdateImage
          incrementOrDecrement={incrementOrDecrement}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          setImageLoaded={setImageLoaded}
        />,
      );
      return container;
    };

    it('increments the image', () => {
      const imageIndex = 0;
      const incrementOrDecrement = 'increment';
      const updatedImageIndex = imageIndex + 1;
      const container = getContainer(incrementOrDecrement, imageIndex);

      const button = container.firstChild;
      expect(button.getAttribute('aria-label')).toEqual('show next image');
      expect(button.firstChild.textContent).toEqual('▶');
      fireEvent.click(button);
      expect(updateImage.getNewImageIndex).toHaveBeenCalledWith(
        imageIndex,
        incrementOrDecrement,
      );
      expect(updateImage.updateImage).toHaveBeenCalledWith({
        setImageIndex,
        setImageLoaded,
        updatedImageIndex,
      });
    });

    it('decrements the image', () => {
      const imageIndex = 1;
      const incrementOrDecrement = 'decrement';
      const updatedImageIndex = imageIndex - 1;
      const container = getContainer(incrementOrDecrement, imageIndex);

      const button = container.firstChild;
      expect(button.getAttribute('aria-label')).toEqual('show previous image');
      expect(button.firstChild.textContent).toEqual('◀');
      fireEvent.click(button);
      expect(updateImage.getNewImageIndex).toHaveBeenCalledWith(
        imageIndex,
        incrementOrDecrement,
      );
      expect(updateImage.updateImage).toHaveBeenCalledWith({
        setImageIndex,
        setImageLoaded,
        updatedImageIndex,
      });
    });
  });

  describe('DecrementImage', () => {
    const imageIndex = 1;
    it('renders correctly', () => {
      const { asFragment } = render(
        <DecrementImage
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          setImageLoaded={setImageLoaded}
        />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('IncrementImage', () => {
    const imageIndex = 1;
    it('renders correctly', () => {
      const { asFragment } = render(
        <IncrementImage
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          setImageLoaded={setImageLoaded}
        />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
