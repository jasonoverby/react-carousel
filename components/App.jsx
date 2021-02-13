import React, { useState } from 'react';

import { ThemeSwitch } from './ThemeSwitch';
import { Carousel } from './Carousel';

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <main className={darkTheme ? 'darkTheme' : ''}>
      <ThemeSwitch toggleTheme={setDarkTheme} checked={darkTheme} />
      <Carousel />
    </main>
  );
};
