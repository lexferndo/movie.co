import PropTypes from "prop-types";
import { useEffect } from "react";

const Rating = ({ id, rating }) => {
  function formatRating(rate) {
    const result = rate?.toFixed(1);

    return parseFloat(result);
  }

  useEffect(() => {
    const rate = document.getElementById(`rating_${id}`);
    if (rate) {
      rate.style.background = `conic-gradient(${
        formatRating(rating) * 10 > 75 ? "#4BF000" : "#F0A500"
      } ${formatRating(rating) * 10 * 3.6}deg, ${
        formatRating(rating) * 10 > 75 ? "#b7f999" : "#f9db99"
      } ${formatRating(rating) * 10 * 3.6}deg)`;
    }
  }, [id, rating]);

  return (
    <div
      id={`rating_${id}`}
      className="bg-primary rounded-full w-11 h-11 grid place-items-center">
      <div className="absolute bg-black rounded-full w-9 h-9 grid place-content-center">
        <p className="text-xs font-medium text-white">
          {formatRating(rating) * 10}%
        </p>
      </div>
    </div>
  );
};

Rating.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
};

export default Rating;
