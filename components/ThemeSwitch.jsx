import React from 'react';

export const ThemeSwitch = ({ checked, toggleTheme }) => {
  const handleKeyPress = (e) => {
    // if user presses spacebar when switch is in focus
    // theme is toggled
    if (e.keyCode === 32) {
      // prevents default browser scroll on spacebar behavior
      e.preventDefault();
      toggleTheme();
    }
  };
  return (
    <>
      <span className="themeIcon">🌞</span>
      <div className="themeSwitch">
        <label tabIndex="0" onKeyDown={handleKeyPress}>
          <input
            type="checkbox"
            role="switch"
            onClick={toggleTheme}
            checked={checked}
            aria-checked={checked}
          />
          <span className="slider"></span>
        </label>
      </div>
      <span className="themeIcon">🌜</span>
    </>
  );
};
