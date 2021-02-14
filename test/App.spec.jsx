import React from 'react';
import { render } from '@testing-library/react';

import { App } from '../components/App';

jest.spyOn(React, 'useState');

describe('App', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('sets the class of main based on the value of darkTheme', () => {
    React.useState.mockReturnValue([true, jest.fn()]);
    const { container } = render(<App />);
    const main = container.firstChild;
    expect(main.className).toEqual('darkTheme');
  });
});
