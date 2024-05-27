'use client'

import Header from "./header";
import Main from "./main";
import { FontSizeProvider } from "./context/FontSizeContext";
import { ThemeProvider } from "./context/ThemeContext";
import VLibras from "vlibras-nextjs";

export default function Home() {
  return (
    <FontSizeProvider>
      <ThemeProvider>
        {process.env.NODE_ENV === 'production' && <VLibras forceOnload />}
        <div className="w-full dark:bg-slate-950 light:bg-white">
          <Header />
          <Main />
        </div>
      </ThemeProvider>
    </FontSizeProvider>
  );
}