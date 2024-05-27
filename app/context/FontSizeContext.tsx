'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FontSizeContextProps {
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  fontSizeMultiplier: number;
}

const FontSizeContext = createContext<FontSizeContextProps | undefined>(undefined);

interface FontSizeProviderProps {
  children: ReactNode;
}

const MIN_MULTIPLIER = 0.5;
const MAX_MULTIPLIER = 2;

export const FontSizeProvider: React.FC<FontSizeProviderProps> = ({ children }) => {
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(1);

  const increaseFontSize = () => {
    setFontSizeMultiplier((prevMultiplier) => Math.min(MAX_MULTIPLIER, prevMultiplier + 0.1));
  };

  const decreaseFontSize = () => {
    setFontSizeMultiplier((prevMultiplier) => Math.max(MIN_MULTIPLIER, prevMultiplier - 0.1));
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-multiplier', `${fontSizeMultiplier}`);
  }, [fontSizeMultiplier]);

  return (
    <FontSizeContext.Provider value={{ increaseFontSize, decreaseFontSize, fontSizeMultiplier }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextProps => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
