import React, { useState } from 'react';

import { ThemeSwitch } from './ThemeSwitch';
import { Carousel } from './Carousel';

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);
  return (
    <main className={darkTheme ? 'darkTheme' : ''}>
      <ThemeSwitch toggleTheme={toggleTheme} checked={darkTheme} />
      <Carousel />
    </main>
  );
};
