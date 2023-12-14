import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, lastPage, setCurrentPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 250,
    });
  };

  const handleNextPage = () => {
    setCurrentPage((page) => page + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setCurrentPage((page) => page - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-end items-center gap-x-3 text-xl ">
      {currentPage <= 1 ? null : (
        <button
          className="flex items-center font-light"
          onClick={handlePrevPage}>
          <IoMdArrowDropleft className="text-2xl" />
          Prev
        </button>
      )}
      <h1 className="font-medium text-primary">
        {currentPage} - {lastPage}
      </h1>
      {currentPage >= lastPage ? null : (
        <button
          className="flex items-center font-light"
          onClick={handleNextPage}>
          Next <IoMdArrowDropright className="text-2xl" />
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
