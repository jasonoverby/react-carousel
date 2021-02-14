import React from 'react';
import { render } from '@testing-library/react';

import { Carousel } from '../components/Carousel';

describe('Carousel', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
