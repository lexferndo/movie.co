import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

let Links = [
  { name: "Upcoming", link: "/upcoming" },
  { name: "Now Playing", link: "/nowplaying" },
  { name: "Popular", link: "/popular" },
  { name: "Top Rated", link: "/toprated" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(false);

  const changeOpacityBackground = () => {
    if (window.scrollY >= 40) {
      setNavbarOpacity(true);
    } else {
      setNavbarOpacity(false);
    }
  };

  window.addEventListener("scroll", changeOpacityBackground);

  return (
    <nav
      className={`fixed flex w-full p-5 bg-black z-20 ${
        navbarOpacity ? "bg-opacity-100" : "bg-opacity-0"
      } transition-all duration-500 ease-in`}>
      <div className="container mx-auto flex items-center justify-between ">
        <a href="/" className="text-2xl font-medium text-primary">
          Movie.co
        </a>
        <button
          className="bg-transparent text-3xl text-white text-center sm:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <MdClose /> : <MdMenu />}
        </button>

        <div
          className={`absolute flex flex-col left-0 bg-black w-full top-16 text-center items-center px-5 py-10 gap-y-10 uppercase transition-all duration-500 ease-in ${
            navbarOpen ? "top-[70px]" : "top-[-600px]"
          } ${
            navbarOpacity ? "bg-opacity-100" : "bg-opacity-50"
          } sm:top-0 sm:flex-row sm:static sm:py-0 sm:pl-10 sm:justify-between sm:bg-transparent`}>
          <ul className="text-white text-xl font-normal grid gap-y-5 sm:flex sm:text-base sm:justify-center sm:gap-x-5 lg:gap-x-10 sm:capitalize ">
            {Links.map((value, index) => {
              return (
                <li key={index}>
                  <a
                    className="transition-all duration-100 ease-in hover:font-bold"
                    href={value.link}>
                    {value.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="w-full grid sm:w-auto ">
            <input
              type="text"
              placeholder="Search"
              className="p-3 border bg-transparent text-primary border-primary placeholder:text-primary placeholder:opacity-70 placeholder:text-lg focus:outline-primary sm:placeholder:text-base sm:w-44 lg:w-64 sm:border-y sm:border-l sm:p-2 sm:rounded-md"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
