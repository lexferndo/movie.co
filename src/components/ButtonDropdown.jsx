import PropTypes from "prop-types";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const ButtonDropdown = ({
  dropdownOpen,
  setDropdownOpen,
  name,
  changeNameToAnime,
  changeNameToManga,
}) => {
  return (
    <>
      <button
        className="flex items-center text-2xl text-primary font-medium z-20 "
        onClick={setDropdownOpen}>
        {name}
        {dropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
      <div
        className={`bg-white text-primary rounded-md absolute grid py-5 gap-y-3 mt-10 transition-all duration-500 ease-in-out  ${
          dropdownOpen ? "visible" : "hidden"
        }`}>
        <a
          href=""
          className="text-xl font-medium py-2 px-16 bg-white text-primary hover:bg-black hover:transition-all hover:duration-300 hover:ease-in"
          onClick={changeNameToAnime}>
          Anime
        </a>
        <a
          href=""
          className="text-xl font-medium py-2 px-16 bg-white text-primary hover:bg-black hover:transition-all hover:duration-300 hover:ease-in"
          onClick={changeNameToManga}>
          Manga
        </a>
      </div>
    </>
  );
};

ButtonDropdown.propTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  setDropdownOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  changeNameToAnime: PropTypes.func.isRequired,
  changeNameToManga: PropTypes.func.isRequired,
};

export default ButtonDropdown;
