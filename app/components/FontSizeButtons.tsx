'use client'

import React from 'react';
import { useFontSize } from '../context/FontSizeContext';

const FontSizeButtons: React.FC = () => {
  const { increaseFontSize, decreaseFontSize, fontSizeMultiplier } = useFontSize();

  return (
    <div className="space-x-2">
      <button 
        onClick={decreaseFontSize} 
        className={`w-10 h-10 border-gray-900 border px-4 py-4 bg-gray-300 dark:bg-white rounded-full ${fontSizeMultiplier <= 0.5 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={fontSizeMultiplier <= 0.5}
      >
        
      </button>
      <button 
        onClick={increaseFontSize} 
        className={`w-10 h-10 border-gray-900 border px-4 py-4 bg-gray-300 dark:bg-white rounded-full ${fontSizeMultiplier >= 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={fontSizeMultiplier >= 2}
      >
      </button>
    </div>
  );
};

export default FontSizeButtons;
