import { updateImage, getNewImageIndex } from '../lib/update-image';

const src = 'http://src.com/something.jpg';
const href = 'http://href.com/';
const alt = 'test';
const imageLocations = [
  {
    src,
    href,
    alt,
  },
  {
    src,
    href,
    alt,
  },
];
jest.mock('../lib/image-locations.js', () => ({
  imageLocations,
}));
jest.mock('../lib/wait.js', () => ({
  wait: async () => Promise.resolve(),
}));

describe('update-image', () => {
  describe('getNewImageIndex', () => {
    it('returns the correct index when incrementing', () => {
      const imageIndex = 0;
      const newImageIndex = getNewImageIndex(imageIndex, 'increment');
      expect(newImageIndex).toEqual(imageIndex + 1);
    });

    it('returns the correct index when incrementing past the number of image locations', () => {
      const imageIndex = imageLocations.length - 1;
      const newImageIndex = getNewImageIndex(imageIndex, 'increment');
      expect(newImageIndex).toEqual(0);
    });

    it('returns the correct index when decrementing', () => {
      const imageIndex = 1;
      const newImageIndex = getNewImageIndex(imageIndex, 'decrement');
      expect(newImageIndex).toEqual(imageIndex - 1);
    });

    it('returns the correct index when decrementing past the first image location', () => {
      const imageIndex = 0;
      const newImageIndex = getNewImageIndex(imageIndex, 'decrement');
      expect(newImageIndex).toEqual(imageLocations.length - 1);
    });
  });

  describe('updateImage', () => {
    const setActiveDotIndex = jest.fn();
    const setImageIndex = jest.fn();
    const setImageLoaded = jest.fn();

    it.only('updates imageIndex and activeDotIndex', async () => {
      jest.useFakeTimers();
      const updatedImageIndex = 1;
      await updateImage({
        updatedImageIndex,
        setActiveDotIndex,
        setImageIndex,
        setImageLoaded,
      });

      expect(setActiveDotIndex).toHaveBeenCalledWith(updatedImageIndex);
      expect(setImageIndex).toHaveBeenCalledWith(updatedImageIndex);
    });
  });
});
