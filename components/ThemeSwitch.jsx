import React from 'react';
import PropTypes from 'prop-types';

export const ThemeSwitch = ({ checked, toggleTheme }) => {
  const handleChange = (e) => {
    if (e.keyCode === 32) {
      // prevent default browser scroll on spacebar behavior
      e.preventDefault();
    }
    toggleTheme(!checked);
  };

  return (
    <>
      <span className="themeIcon">🌞</span>
      <div className="themeSwitch">
        <label htmlFor="switch">
          <input
            id="switch"
            type="checkbox"
            role="switch"
            onChange={handleChange}
            checked={checked}
            aria-checked={checked}
          />
          <span className="slider" />
        </label>
      </div>
      <span className="themeIcon">🌜</span>
    </>
  );
};

ThemeSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
