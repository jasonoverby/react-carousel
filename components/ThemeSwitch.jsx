import React from 'react';

export const ThemeSwitch = ({ toggleTheme }) => (
  <>
    <span className="themeIcon">🌞</span>
    <div className="themeSwitch">
      <label>
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
    <span className="themeIcon">🌜</span>
  </>
);
