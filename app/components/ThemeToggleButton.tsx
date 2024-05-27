'use client'

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-2 bg-gray-300 dark:bg-gray-800 rounded">
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default ThemeToggleButton;
