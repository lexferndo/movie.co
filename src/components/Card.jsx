import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ id, image, title }) => {
  return (
    <div className="grid justify-center items-start gap-y-1 px-2 ">
      <img src={image} alt="cardimage" />

      <div className="py-3 text-center">
        <Link to={`/detail/${id}`} className="text-lg font-normal">
          {title}
        </Link>
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
