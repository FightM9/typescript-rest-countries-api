import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import styled from  './ThemeSwitcher.module.css';

/**
 * Set light or dark data-theme attributes in HTML body
 * @returns 
 */

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button className={styled.theme_switcher} onClick={toogleTheme}>
      {theme === 'light' ? (
        <>
          <IoMoon />
          <span>Dark Theme</span>
        </>
      ) : (
        <>
          <IoSunnyOutline />
          <span>Light Theme</span>
        </>
      )}
    </button>
  );
}
