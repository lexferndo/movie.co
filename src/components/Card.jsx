import PropTypes from "prop-types";

const Card = ({ image, title }) => {
  return (
    <div className="grid justify-center gap-y-1 ">
      <img src={image} alt="cardimage" className="w-full h-56" />

      <div className="py-3">
        <h1 className="text-center text-base">{title}</h1>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
