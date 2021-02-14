import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import * as utils from '../lib/utils';
import {
  DecrementImage,
  IncrementImage,
  UpdateImage,
} from '../components/ChangeImage';

jest.spyOn(utils, 'updateImage');
jest.spyOn(utils, 'getNewImageIndex');

describe('ChangeImage', () => {
  const setActiveDotIndex = jest.fn();
  const setImageIndex = jest
    .fn()
    .mockImplementation((imageIndex, incrementOrDecrement) =>
      incrementOrDecrement === 'increment' ? imageIndex + 1 : imageIndex - 1,
    );
  const setImageLoaded = jest.fn();

  describe('UpdateImage', () => {
    const getContainer = (incrementOrDecrement, imageIndex) =>
      render(
        <UpdateImage
          incrementOrDecrement={incrementOrDecrement}
          imageIndex={imageIndex}
          setActiveDotIndex={setActiveDotIndex}
          setImageIndex={setImageIndex}
          setImageLoaded={setImageLoaded}
        />,
      );

    it('increments the image', () => {
      const imageIndex = 0;
      const incrementOrDecrement = 'increment';
      const updatedImageIndex = imageIndex + 1;
      const { container } = getContainer(incrementOrDecrement, imageIndex);

      const button = container.firstChild;
      expect(button.getAttribute('aria-label')).toEqual('show next image');
      expect(button.firstChild.textContent).toEqual('▶');
      fireEvent.click(button);
      expect(utils.getNewImageIndex).toHaveBeenCalledWith(
        imageIndex,
        incrementOrDecrement,
      );
      expect(utils.updateImage).toHaveBeenCalledWith({
        setActiveDotIndex,
        setImageIndex,
        setImageLoaded,
        updatedImageIndex,
      });
    });

    it('decrements the image', () => {
      const imageIndex = 1;
      const incrementOrDecrement = 'decrement';
      const updatedImageIndex = imageIndex - 1;
      const { container } = getContainer(incrementOrDecrement, imageIndex);

      const button = container.firstChild;
      expect(button.getAttribute('aria-label')).toEqual('show previous image');
      expect(button.firstChild.textContent).toEqual('◀');
      fireEvent.click(button);
      expect(utils.getNewImageIndex).toHaveBeenCalledWith(
        imageIndex,
        incrementOrDecrement,
      );
      expect(utils.updateImage).toHaveBeenCalledWith({
        setActiveDotIndex,
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
          setActiveDotIndex={setActiveDotIndex}
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
          setActiveDotIndex={setActiveDotIndex}
          setImageIndex={setImageIndex}
          setImageLoaded={setImageLoaded}
        />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
