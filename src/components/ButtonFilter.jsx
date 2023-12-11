import { useState } from "react";
import PropTypes from "prop-types";

import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const ButtonFilter = ({ genreMovie }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <button
        className="text-2xl font-medium text-primary flex items-center"
        onClick={handleClick}>
        Categories Filter
        {dropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
      <div
        className={`bg-black bg-opacity-95 rounded-md absolute pl-6 pr-16 py-5 grid gap-y-5 ${
          dropdownOpen ? "opacity-100" : "opacity-0"
        }`}>
        <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
          {genreMovie.map((value) => {
            return (
              <li key={value.id} className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  className="scale-125 border-none accent-primary focus:ring-white focus:ring-1 focus:accent-primary"
                />
                <label
                  htmlFor="checkbox"
                  className="text-xl font-light text-primary">
                  {value.name}
                </label>
              </li>
            );
          })}
        </ul>
        <div className="w-full flex justify-end">
          <button className="text-xl font-medium text-primary rounded-md">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

ButtonFilter.propTypes = {
  genreMovie: PropTypes.array.isRequired,
};

export default ButtonFilter;
