import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ImageContainer, ImageLink } from '../components/ImageContainer';

const imageIndex = 0;
const imageLoaded = true;
const setCarouselPaused = jest.fn();
const src = 'http://src.com/something.jpg';
const href = 'http://href.com/';
const alt = 'test';

jest.mock('../lib/image-locations.js', () => ({
  imageLocations: [
    {
      src,
      href,
      alt,
    },
  ],
}));

describe('ImageContainer', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ImageContainer
        imageIndex={imageIndex}
        imageLoaded={imageLoaded}
        setCarouselPaused={setCarouselPaused}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('ImageLink', () => {
  let container;
  let img;

  beforeEach(() => {
    ({ container } = render(
      <ImageLink
        imageIndex={imageIndex}
        imageLoaded={imageLoaded}
        setCarouselPaused={setCarouselPaused}
      />,
    ));
    img = container.firstChild.querySelector('img');
  });

  afterEach(jest.resetAllMocks);

  it('sets properties correctly', () => {
    expect(container.firstChild.href).toEqual(href);
    expect(img.src).toEqual(src);
    expect(img.alt).toEqual(alt);
  });

  it('calls setCarouselPaused onMouseOver', () => {
    fireEvent.mouseOver(img);
    expect(setCarouselPaused).toHaveBeenCalledWith(true);
  });

  it('calls setCarouselPaused onFocus', () => {
    fireEvent.focus(img);
    expect(setCarouselPaused).toHaveBeenCalledWith(true);
  });

  it('calls setCarouselPaused onMouseOut', () => {
    fireEvent.mouseOut(img);
    expect(setCarouselPaused).toHaveBeenCalledWith(false);
  });

  it('calls setCarouselPaused onBlur', () => {
    fireEvent.blur(img);
    expect(setCarouselPaused).toHaveBeenCalledWith(false);
  });

  it('sets class based on imageLoaded', () => {
    ({ container } = render(
      <ImageLink
        imageIndex={imageIndex}
        imageLoaded
        setCarouselPaused={setCarouselPaused}
      />,
    ));
    img = container.firstChild.querySelector('img');
    expect(img.className).toEqual('imageLoaded');
  });
});
