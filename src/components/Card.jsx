import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ id, image, title }) => {
  return (
    <div className="grid justify-center gap-y-1 px-2 justify-items-center">
      <img src={image} alt="cardimage" className="h-56" />

      <div className="py-3 text-center text-base font-light">
        <Link to={`/detail/${id}`}>{title}</Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
