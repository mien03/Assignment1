const Header = () => {
  return (
    <header className="bg-white mb-7">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900  hover:text-red-600	"
          >
            product
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900  hover:text-red-600"
          >
            Features
          </a>
          <a
            href="/profile"
            className="text-sm font-semibold leading-6 text-gray-900  hover:text-red-600"
          >
            profile
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600"
          >
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 text-cyan-400	"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
