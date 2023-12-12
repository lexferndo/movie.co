import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Card = ({ id, image, title, vote_average }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="grid justify-center items-start gap-y-1 px-2 hover:scale-105 transition-all duration-700">
        <div className="relative">
          <img src={image} alt="cardimage" />
          <div className="absolute -bottom-3 left-2">
            <Rating id={id} rating={vote_average} />
          </div>
        </div>

        <div className="py-5 text-center text-lg font-normal">
          <p className="text-center text-lg font-normal">{title}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default Card;
