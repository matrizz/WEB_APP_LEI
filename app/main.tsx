'use client'

import FontSizeButtons from "./components/FontSizeButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function Main() {

  return (
    <main className={`text-base w-full h-full py-4 px-10 mt-10`}>
      <div className="border-2 border-gray-300 w-full h-full text-black  flex flex-col gap-10">
        <section className="w-full h-full flex flex-col pt-5 gap-10">
          <div className="flex justify-center items-center">
            <p className="text-3xl">Serviços</p>
          </div>
          <div className="border-y-2 border-gray-400 h-full py-4 px-6 flex flex-col gap-1">
            {Array.from({ length: 6 }).map(() => {
              return (
                <button className="w-full border-2 border-gray-200 px-2 py-1 rounded-sm hover:bg-blue-100">
                  Informações
                </button>
              );
            })}
          </div>
        </section>
        <FontSizeButtons />
        <ThemeToggleButton />
        <div className="w-full h-full flex flex-col pt-5 gap-10 items-center justify-center">
          <div className="flex justify-center items-center mt-6">
            <p className="text-3xl">Notícias</p>
          </div>
          <div className="w-full min-w-96 max-w-5xl border-2 border-gray-400 py-2 px-3 flex flex-col gap-2">
            <div className="w-full flex flex-wrap gap-2">
              <div className="w-full min-w-60 border-2 flex-grow basis-5 border-black h-52"></div>
              <div className="w-full min-w-60 border-2 flex-grow basis-5 border-black h-52"></div>
              <div className="w-full min-w-60 border-2 flex-grow basis-5 border-black h-52"></div>
            </div>
            <div className="w-full flex flex-wrap gap-2">
              <div className="w-full border-2 flex-grow basis-5 border-black h-52"></div>
              <div className="w-full border-2 flex-grow basis-5 border-black h-52"></div>
            </div>
          </div>
          <footer>Prefeitura Municipal de Granz </footer>
        </div>
      </div>
    </main>
  );
}
