import NavigationBar from "./NavigationBar";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full h-16 px-4 py-2 ">
        <img
          src="dist\assets\logo-univesp-B8LBgJqp.svg"
          alt="univesp logo"
          className="h-full"
        />

        <button
          onClick={NavigationBar.display}
          className="appearance-none border-none outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </header>
    </>
  );
}

export default Header;
