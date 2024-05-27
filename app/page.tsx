'use client'

import Header from "./header";
import Main from "./main";
import { FontSizeProvider } from "./context/FontSizeContext";
import { ThemeProvider } from "./context/ThemeContext";
import type { NextPage } from "next";
import VLibras from "vlibras-nextjs";

export const Home: NextPage = () => {
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

export default Home