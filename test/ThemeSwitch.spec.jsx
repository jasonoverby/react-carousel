import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ThemeSwitch } from '../components/ThemeSwitch';

describe('ThemeSwitch', () => {
  const toggleTheme = jest.fn();

  it('renders correctly', () => {
    const checked = false;
    const { asFragment } = render(
      <ThemeSwitch checked={checked} toggleTheme={toggleTheme} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly when checked is true', () => {
    const checked = true;
    const { asFragment } = render(
      <ThemeSwitch checked={checked} toggleTheme={toggleTheme} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls toggleTheme when input is clicked', () => {
    const checked = false;
    const { container } = render(
      <ThemeSwitch checked={checked} toggleTheme={toggleTheme} />,
    );

    const switchInput = container.querySelector('#switch');
    fireEvent.click(switchInput);
    expect(toggleTheme).toHaveBeenCalledWith(!checked);
  });
});
