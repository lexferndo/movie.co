import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="flex justify-end items-center gap-x-3 text-xl ">
      <button className="flex items-center font-light">
        <IoMdArrowDropleft className="text-2xl" />
        Prev
      </button>
      <h1 className="font-medium text-primary">1 Of 1000</h1>
      <button className="flex items-center font-light">
        Next <IoMdArrowDropright className="text-2xl" />
      </button>
    </div>
  );
};

export default Pagination;
