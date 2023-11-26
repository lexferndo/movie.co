import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

let Links = [
  { name: "Upcoming", link: "#" },
  { name: "Now Playing", link: "/nowplaying" },
  { name: "Popular", link: "#" },
  { name: "Top Rated", link: "#" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(false);

  const changeOpacityBackground = () => {
    if (window.scrollY >= 63) {
      setNavbarOpacity(true);
    } else {
      setNavbarOpacity(false);
    }
  };

  window.addEventListener("scroll", changeOpacityBackground);

  return (
    <nav
      className={`fixed flex w-full bg-black z-40 ${
        navbarOpacity ? "bg-opacity-100" : "bg-opacity-50"
      } transition-all duration-500 ease-in`}>
      <div className="container mx-auto p-5 flex items-center sm:gap-x-[11vw] sm:px-0 lg:px-5">
        <a href="/" className="text-2xl font-medium text-primary flex-1 ">
          Movie.co
        </a>
        <button
          className="bg-transparent text-3xl text-white text-center sm:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <MdClose /> : <MdMenu />}
        </button>

        <div
          className={`absolute grid left-0 bg-black w-full top-16 justify-items-center text-center items-center py-10 gap-y-10 uppercase transition-all duration-500 ease-in ${
            navbarOpen ? "top-[70px]" : "top-[-600px]"
          } ${
            navbarOpacity ? "bg-opacity-100" : "bg-opacity-50"
          } sm:relative sm:gap-x-5 sm:bg-transparent sm:flex sm:py-0 sm:top-0`}>
          <ul className="text-white text-xl font-normal grid gap-y-5 sm:flex sm:flex-1 sm:text-base sm:justify-center sm:gap-x-5 lg:gap-x-10 sm:capitalize">
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
          <div className="w-full px-10 grid sm:px-0 sm:w-fit">
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
