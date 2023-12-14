import PropTypes from "prop-types";

const Hero = ({ title, description, highlight }) => {
  return (
    <div className="grid py-40 px-5 text-white gap-y-2 text-center bg-black bg-opacity-50 sm:px-48">
      <h1 className="text-4xl font-semibold tracking-wide">{title}</h1>
      <p className="text-base font-normal ">
        {description}
        <strong className="font-semibold text-primary">{highlight}</strong>
      </p>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  highlight: PropTypes.string,
};

export default Hero;
