import React from 'react';
import { toggleTheme } from '../../utils/ThemeSlice/ThemeSlice';
import { useDispatch } from 'react-redux';

export default function ThemeButton({ children }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-3 font-semibold bg-indigo-600 text-zinc-50 rounded-lg hover:opacity-90 cursor-pointer">
      {children}
    </button>
  );
}
