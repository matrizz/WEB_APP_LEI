import FontSizeButtons from "./components/FontSizeButtons";

export default function Header() {

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex w-full gap-16 items-center justify-end">
          <div className="md:w-58 md:flex md:justify-between md:gap-10 lg:flex lg:gap-x-12">
            <a className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:bg-blue-300 hover:cursor-pointer w-28 rounded-sm justify-center">
              Prefeitura
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:bg-blue-300 hover:cursor-pointer w-28 flex py-1 px-2 rounded-sm justify-center"
            >
              Transparência
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:bg-blue-300 hover:cursor-pointer w-28 flex py-1 px-2 rounded-sm justify-center"
            >
              Licitação
            </a>
          </div>
          <div className="flex justify-center items-center ">
            <input
              className="flex items-center px-3.5 py-2.5 text-slate-400 h-8 border-black border-r-2"
              type="text"
              placeholder="Search projects..."
            />
            <svg
              className="mr-2 h-5 w-5 stroke-slate-500 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
      <div className="w-full b text-black h-8 flex justify-center items-center px-4">
        <div className="w-full h-full flex justify-center items-center gap-2 ">
          <button
            type="button"
            className="flex items-center text-sm font-semibold leading-6 tetx-black hover:bg-blue-300 px-4 h-full w-full justify-center border-x-2"
            aria-expanded="false"
          >
            Órgãos do Município
          </button>
          <button
            type="button"
            className="flex items-center text-sm font-semibold leading-6 tetx-black hover:bg-blue-300 px-4 h-full w-full justify-center border-x-2"
            aria-expanded="false"
          >
            Acesso e Informações
          </button>
          <button
            type="button"
            className="flex items-center text-sm font-semibold leading-6 tetx-black hover:bg-blue-300 px-4 h-full w-full justify-center border-x-2"
            aria-expanded="false"
          >
            Legislação
          </button>
          <button
            type="button"
            className="flex items-center text-sm font-semibold leading-6 tetx-black hover:bg-blue-300 px-4 h-full w-full justify-center border-x-2"
            aria-expanded="false"
          >
            Acessibilidade
          </button>
        </div>
      </div>
      <div className="text-black">
        <FontSizeButtons  />
      </div>
    </header>
  );
}
