import React from 'react';

import { ThemeSwitch } from './ThemeSwitch';
import { Carousel } from './Carousel';

export const App = () => {
  // destructuring useState on import makes it difficult to mock so using React.useState instead
  const [darkTheme, setDarkTheme] = React.useState(false);
  return (
    <main className={darkTheme ? 'darkTheme' : ''}>
      <ThemeSwitch toggleTheme={setDarkTheme} checked={darkTheme} />
      <Carousel />
    </main>
  );
};
