import React, { useEffect } from 'react';
import { Link } from 'react-router';
import ThemeButton from '../ThemeButton/ThemeButton';
import NavLinkButton from '../NavLinkButton.jsx/NavLinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../utils/ThemeSlice/ThemeSlice';

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme' || 'light');
    dispatch(setTheme(savedTheme));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="p-5 flex justify-between bg-gray-100 items-center dark:bg-gray-800">
      <Link>
        <span className="font-bold text-indigo-600 text-2xl hover:animate-pulse">
          GetResume
        </span>
      </Link>

      <nav className="flex gap-3">
        <NavLinkButton to={'/'}>Home</NavLinkButton>
        <NavLinkButton to={'about'}>About</NavLinkButton>

        <NavLinkButton to={'https://github.com/Kohize'} target="_blank">
          Contacts
        </NavLinkButton>
      </nav>

      <div>
        <ThemeButton>{theme === 'light' ? '🌙 ' : '☀️ '}</ThemeButton>
      </div>
    </header>
  );
}
